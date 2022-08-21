<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Navbar from './lib/Navbar.svelte'
  import Card1 from './lib/Card1.svelte'
  import Card2 from './lib/Card2.svelte'
  import CardPic from './lib/CardPic.svelte'
  import CardPageViews from './lib/CardPageViews.svelte'
  import CardNotification from './lib/CardNotification.svelte'
  import CardLogin from './lib/CardLogin.svelte'
  import CardProgress from './lib/CardProgress.svelte'
  import CardCheckbox from './lib/CardCheckbox.svelte'
  import CardMenu from './lib/CardMenu.svelte'
  import CardAlert from './lib/CardAlert.svelte'
</script>

<main>
  <div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
    <Navbar/>
    <Card1/>
    <Card2/>
    <CardPic/>
    <CardPageViews/>
    <CardNotification/>
    <CardLogin/>
    <CardProgress/>
    <CardCheckbox/>
    <CardMenu/>
    <CardAlert/>
  </div>
  <h1>Hello world!</h1>

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
