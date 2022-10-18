<template>
    <div class="container mt-3">
        <!-- Guessing 5 step -->
        <form v-if="curIndex < movieData.length" class="row g-3 needs-validation col-md-6 m-auto" novalidate>
            <h6 for="validationCustom01" class="col-md-12 form-label m-auto text-center">Movie {{ curIndex + 1 }}
                out {{ movieData.length }}</h6>
            <h6 for="validationCustom01" class="col-md-12 form-label mt-1 m-auto text-center">Terminator {{
            curIndex + 1 }}</h6>
            <!-- Image -->
            <div class="fit-content m-auto mt-1">
                <div class="d-flex justify-content-center">
                    <img v-if="movieData[curIndex].Poster" class="card-image card m-1" :src="movieData[curIndex].Poster"
                        alt="Card image cap">
                    <img v-else class="card-image card m-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                        alt="Card image cap">
                </div>
            </div>
            <!-- Plot -->
            <div class="m-auto mt-1 col-md-12">
                <p class="card-text">
                    {{ movieData[curIndex].Plot }}
                </p>
            </div>
            <!-- submit rate -->
            <div class="mt-3 row">
                <div class="col-md-8">
                    <input type="text" class="form-control" v-model="guess_rate" placeholder="score..." required>
                </div>
                <div class="col-md-4">
                    <input type="button" class="btn btn-primary w-100" v-on:click="onNext" value="submit">
                </div>
            </div>
        </form>
        <!-- Guessing end up -->
        <form v-else class="row g-3 needs-validation col-md-6 m-auto" novalidate>
            <h6 for="validationCustom01" class="col-md-12 form-label m-auto text-center">Result</h6>
            <div class="card" style="height: 15em;">
                <div class="h-25 m-auto">
                    <h6 for="validationCustom01" class="col-md-12 form-label m-auto mt-3">Success rate {{
                    succeedCount }} out of {{ movieData.length }} guesses</h6>
                </div>
                <div class="h-75 m-auto">
                    <h2 for="validationCustom01" class="col-md-12 form-label mt-5">{{ succeedCount * 100 /
                    movieData.length }}%</h2>
                </div>
            </div>
            <div class="col-6 mt-3 m-auto">
                <button class="btn btn-primary w-100" type="button" @click="onSubmit">Submit</button>
            </div>
        </form>
    </div>
</template>
 
<script lang="ts">
import { resetTracking } from '@vue/reactivity'
import axios from 'axios'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'

interface IMDBQueryItem {
    imdbRating: string,
    Plot: string,
    Poster: string
}

export default defineComponent({
    name: "GuessingPage",
    props: [],
    data() {
        return {
            curIndex: 0,
            movieData: new Array<IMDBQueryItem>(),
            succeedCount: 0,
            guess_rate: -1,
        }
    },
    setup() {
        const store = useStore(key)
        store
    },
    methods: {
        validate(): boolean {
            return this.guess_rate > -1
        },
        reset() {
            this.curIndex = 0
            this.succeedCount = 0
        },
        onNext() {
            if (this.validate()) {
                if (Math.abs(this.guess_rate - parseInt(this.movieData[this.curIndex].imdbRating)) <= 1)
                    this.succeedCount++;
                this.curIndex++;
            } else {
                alert('You need to fill input box.')
            }
        },
        async onSubmit() {
            await axios.post(process.env.VUE_APP_API_URL + '/api/new-score', {
                username: this.$store.state.username,
                terminator: this.$store.state.terminator,
                score: (this.succeedCount * 10 / this.movieData.length)
            })
            this.$router.push({ name: "results" })
            this.reset()
        }
    },
    async created() {
        this.reset()
        if (this.$store.state.terminator === undefined)
            this.$router.push({ name: 'home' })

        const responseRaw = await fetch(`${process.env.VUE_APP_OMDB_API_URL}/?apikey=${process.env.VUE_APP_OMDB_API_KEY}&s=${this.$store.state.terminator}`);
        const response = await responseRaw?.json();
        const movieList = response.Search

        movieList.map(async (movie: any) => {
            const response = await fetch(`${process.env.VUE_APP_OMDB_API_URL}/?apikey=${process.env.VUE_APP_OMDB_API_KEY}&i=${movie.imdbID}`);
            const result: IMDBQueryItem = await response?.json() as IMDBQueryItem;
            result.imdbRating !== "N/A" ? this.movieData.push(result) : undefined
        });
    },
})
</script>

<style lang="scss">
.card-image {
    max-height: 24em;
    max-width: 20em;
}

.fit-content {
    width: fit-content;
}
</style>