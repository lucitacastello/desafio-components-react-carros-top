import './styles.css'

import Header from '../../components/Header';
import Card from '../../components/Card';
import CardComment from '../../components/CardComment';

export default function Catalog() {
    return (
        <>
            <Header />
            <main className='ct-catalog-main'>
                <section id="ct-catalog-section" className='ct-container'>
                    <div className="ct-catalog-cards-container">
                        <h2>Venha nos conhecer</h2>
                        <Card />
                        <Card />
                    </div>

                    <div className='ct-comment-cards-container'>
                        <h2>O que estão dizendo</h2>
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                    </div>

                    <div>
                        footer
                    </div>
                </section>
            </main>
        </>

    );
}
