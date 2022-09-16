import './Home.css';
import iconChat from '../../assets/iconChat.png';
import iconMoney from '../../assets/iconMoney.png';
import iconSecurity from '../../assets/iconSecurity.png';

const Home = () => (
    <div className="home">
        <main>
            <div className='home__slider'>
                <h2 className='hide__only'>Promoted Content</h2>
                <div className='home__slider__container'>
                    <p className='home__slider__p'>No fees.</p>
                    <p className='home__slider__p'>No minimum deposit.</p>
                    <p className='home__slider__p'>High interest rates.</p>
                    <p className='home__slider__text'>Open a savings account with Argent Bank today!</p>
                </div>
            </div>
            <section className='home__feature'>
                <h2 className='hide__only'>Features</h2>
                <article className='home__feature__article'>
                    <img className='home__feature__img' src={iconChat} alt='icon chat'/>
                    <h3 className='home__feature__title'>You are our #1 priority</h3>
                    <p className='home__feature__text'>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
                </article>

                <article className='home__feature__article'>
                    <img className='home__feature__img' src={iconMoney} alt='icon money'/>
                    <h3 className='home__feature__title'>More savings means higher rates</h3>
                    <p className='home__feature__text'>The more you save with us, the higher your interest rate will be!</p>
                </article>

                <article className='home__feature__article'>
                    <img className='home__feature__img'src={iconSecurity} alt='icon security'/>
                    <h3 className='home__feature__title'>Security you can trust</h3>
                    <p className='home__feature__text'>We use top of the line encryption to make sure your data and money is always safe.</p>
                </article>
            </section>
        </main>
    </div>
);


export default Home