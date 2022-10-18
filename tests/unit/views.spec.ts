import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import GuessingView from '@/views/GuessingView.vue'
import ResultsView from '@/views/ResultsView.vue'

describe('HomeView.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(HomeView)
  })
})


describe('GuessingView.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(GuessingView)
  })
})


describe('ResultsView.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ResultsView)
  })
})