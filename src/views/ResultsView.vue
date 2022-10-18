<template>
    <div class="card col-md-8 m-auto mt-3">
        <div class="card-body">
            <!-- <h5 class="card-title">Guessing Results</h5> -->

            <div class="table-responsive">
                <table class="table">
                    <caption>List of Results</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Term</th>
                            <th scope="col">Score</th>
                            <th scope="col">Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="score in scoreList" v-bind:key="score.id">
                            <th scope="row">{{ score.id }}</th>
                            <td>{{ score.username }}</td>
                            <td>{{ score.term }}</td>
                            <td>{{ score.score }}</td>
                            <td>{{ score.created_at }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <i class="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;<a class="card-link" @click="clearAll">Remove
                All</a>
        </div>
    </div>
</template>
 
<script lang="ts">
import axios from 'axios'

interface ScoreItem {
    id: number,
    username: string,
    created_at: string,
    term: string,
    score: number
}

export default {
    name: 'ResultsView',
    data() {
        return {
            scoreList: new Array<ScoreItem>(),
        }
    },
    methods: {
        async clearAll() {
            await axios.get(process.env.VUE_APP_API_URL + '/api/clear-scores')
        }
    },
    async created() {
        const allScore = await axios.get(process.env.VUE_APP_API_URL + '/api/all-score')
        this.scoreList = allScore.data as Array<ScoreItem>
    }
}
</script>