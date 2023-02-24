import React from 'react'
import './infomain.css'

export default function InfoMain() {
  return (
    <section className='container-info'>
        <div className='div-info'>
            <div>
                <img className="deku" src="./image/29eba9990120382f731a1ae7dbe1a54d_1_1.png" alt="deku" />
            </div>
			<div>
				<img className="poster"src="./image/image 3.jpg" alt="posterBokunoHero" />
			</div>
			<div className='description'>
				<div>
					<h2 id='bnh'>My hero Academia</h2>
				</div>
				<div>
					<p id="manga">manga</p>
				</div>
				<div>
					<h6 id= "description">In a world in which most of the population is born with a Gift,
					a different extraordinary ability in each one, it didn't
					take long for both villains and heroes to appear ready to
					to stop them.
				</h6>
				</div>
			</div>
        </div>
          
    </section>
  )
}
