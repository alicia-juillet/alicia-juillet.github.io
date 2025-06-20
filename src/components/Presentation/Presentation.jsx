import myPicture from "../../assets/my-picture.webp"
import "./Presentation.scss"


function Presentation () {
    return (
        <section id="presentation">
            <img src={myPicture} alt="Ma photo" className="img-presentation"/>
            <div className="text-presentation">
                <h1>Hello!<br/> Je suis Alicia.</h1>
                <h2>Développeuse web front-end</h2>
                <p>J'aime transformer des idées en interfaces élégantes et fonctionnelles. <br/>
                Alternante ou salariée, je suis prête à embarquer sur votre prochain projet!</p>
            </div>
        </section>
    )
}

export default Presentation