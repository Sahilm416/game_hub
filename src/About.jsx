import './App.css'

export default function About() {
  return (
    <>
<div className='about-whole'>
<div className="main-about">
      <h1>About us</h1>
      <div className='para'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex delectus
          atque, reprehenderit, minima illum est reiciendis ut, maiores hic cum
          nostrum aspernatur veritatis corrupti quaerat ratione quidem repellat
          quos voluptatem molestias! Cumque repellat voluptatem, vero
          asperiores, quaerat vitae reiciendis aperiam unde est totam laudantium
          distinctio nobis at enim aspernatur. Voluptate. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ducimus,
          odio explicabo sed laudantium quisquam dolores alias accusamus
          adipisci pariatur voluptatibus libero odit consequuntur dolore facilis
          vitae? Corporis, iure saepe.
        </p>
      </div>
      <button onClick={()=>{
        alert("will be available soon...")
      }}>know more </button>
      </div>
</div>
    </>
  );
}
