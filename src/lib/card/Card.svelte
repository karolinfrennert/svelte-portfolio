<script lang="ts">  
  export let title: string = 'Unknown title'
  export let description: string = 'Unknown description'
  export let src: string = ''
  export let alt: string = 'An image'  
  export let github: string
  export let info: string = 'Some more info about the project'
</script>

<article class="card">
  <div class="card-side front">
    <img src={src} alt={alt}>
  <div class="text-content">
    <h2 class="title">
      {title}
    </h2>
    <p class="description">
      {description}
    </p>    
  </div>
  </div>  	
  <div class="card-side back">
    <div>
      <p>{info}</p>
      <a href={github}>View on Github</a>
    </div>
  </div>	  
</article>


<style>

  h2{
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 1rem;
  }

  img {  
  width: 100%;
  object-fit: cover;
  height: max(8rem, 30vh);
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  perspective: 150rem;
  transition: 0.3s;
  position: relative;
  height: 35rem;
  max-width: 500px;
  margin: 1em;
  box-shadow: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start; 
  flex: 0 1 30em; 
}
.card-side {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  height: 30rem;  
  transition: all 0.3s ease;
  backface-visibility: hidden;
  position: absolute;  
  width: 80%;
  padding:2rem;
  color: white
}

.card-side.back {
  transform: rotateY(-180deg);
  
}

.card:hover .card-side.front {
  transform: rotateY(180deg);
}

.card:hover .card-side.back {
  transform: rotateY(0deg);
}

.text-content{
  padding: 0 1rem;
  
}
</style>