import React, {useEffect, useRef} from 'react';
import './MonumentInfo.css';
import www from '../Images/www.svg';
import location from '../Images/location.svg';
import speaker from '../Images/speaker.svg';
import threeD from '../Images/3D.svg';

const MonumentInfo = () => {
    let speech = new SpeechSynthesisUtterance();
    let voices= [];

    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
    }

    const text = useRef(null);
    const btn = useRef(null);
    useEffect(() => {
        const textcontainer = text.current;
        const listen = btn.current;
        
        return () => {
            console.log(textcontainer);
            voices.forEach((item)=>{console.log(item)})
            listen.addEventListener("click", () => {
                console.log("Clicked");
                speech.text = textcontainer.textContent;
                window.speechSynthesis.speak(speech);
            })
        };
         
        
    }, []);
  return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner carousel-style">
            <div className="carousel-item active">
                <img src="https://punetourism.co.in/images/places-to-visit/headers/shinde-chhatri-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="d-block w-100" alt="..."/>
                
            </div>
            <div className="carousel-item">
                <img src="https://img.atlasobscura.com/Pjt8yz0ZAF27D2mivAtscrwE_wVnF5RkncLUaDVvA0c/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9mYWNi/MWJmMC01YWM0LTQ4/MmMtYjUzZS03NTNk/NmMwNGIyNzg0N2Yy/OGQ4YWM2NDc1MzUy/MzNfSU1HXzIwMjIw/ODI3XzA4NTYyMC5q/cGc.jpg" className="d-block w-100" alt="..."/>
                
            </div>
            <div className="carousel-item">
                <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTP0hhU4qsFrWYTx4blHT-vgALjt2ChfpUq8umU5qQlmZcVXEdSsg99imeVYTOIZmEp" className="d-block w-100" alt="..."/>
                
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="overlay-info">
            <div className="left-info">
                <div className='left-content'>
                    <h1 className='text-center'>Aga Khan Palace</h1>
                    <p className='text-container overflow-y-auto' ref={text}>The Shaniwar Wada was normally the seven-story capital building of the Peshwas of the Maratha Empire. It was supposed to be made entirely of stone. However, after the completion of the base floor or the first story, the people of Satara (the national capital) complained to the Chhatrapati Shahu I (Emperor) saying that a stone monument can be sanctioned and built only by the emperor himself and not the Peshwas. Following this, an official letter was written to the Peshwas stating that the remaining building had to be made of brick and not stone. Even today if you visit and see the walls carefully, they are partly made of stone and partly of bricks. The Wada was then completed and upon being attacked by the British Artillery 90 years later, all the top six stories collapsed leaving only the stone base, which was immune to the British artillery. Hence only the stone base of the Shaniwar Wada remains and can be seen even today in the older parts of Pune.</p>
                    {/* <p className='text-container overflow-y-auto' ref={text}>मराठा साम्राज्य में पेशवा बाजीराव जो कि छत्रपति शाहु के प्रधान (पेशवा) थे। इन्होंने ने ही शनिवार वाड़ा का निर्माण करवाया था। शनिवार वाड़ा का मराठी में मतलब शनिवार (शनिवार/Saturday) तथा वाड़ा का मतलब टीक होता है। शनिवार वाडा की नींव का काम १० जनवरी १७३० को शुरू हुआ। २२ जनवारी १७३२ को शनिवार वाड़ा की नींव करके वास्तु शांति की गई। १७३२ के बाद भी बाड़े में हमेशा नया बांधकाम, बदल होते गए। बुरुज के दरवाजे का काम होते-होते १७६० ये वर्ष आया। १८०८, १८१२, १८१३ इन वर्षों में छोटी बड़ी आग लगने की दुर्घटना हुई तो १७ नवंबर १८१७ को बाडे पर ब्रिटिशों के निशान लगे। इसके बाद यहाँ कुछ समय तक पुणे के पहले कलेक्‍टर हेन्‍री डंडास रॉबर्टसन रहते थे। बाडे में तुरुंग, पंगुगृह, पुलिस का निवासस्थान थे। १८२८ में बाड़े में बड़ी आग लगी और आग में अंदाजे सर्व इमारतॆ जल गई। आगे लगभग ९० साल बाद बाडे की दुरवस्था खत्म होने का योग आया। १९१९ में बाडा संरक्षित स्मारक घोषित किया गया और बाडे का उत्खनन करने का काम शुरू किया गया। उस समय बाडे में कोर्ट के लिए उपयोग में लाई जाने वाली इमारत १९२३ के पहले उत्खनन के लिए गिरा दी गई। शनिवार बाडे संबंधी अनेक घटना, दुर्घटना है। बाडेतील पेशवे के कार्यालय में अनेक वीर और मातब्बर राजकारण के दाव पेच रंगते थे। पेशवे का दरबार यही पर था। पेशवे के घर के लडके लडकियों का विवाह इसी बाडे में होता था। शनिवारबाडे के आगे के प्रांगण में सैनिको की सभा होने लगी। आचार्य अत्रे ने संयुक्त महाराष्ट्र का आंदोलन इसी प्रांगण सेे लढा़। बाडे के प्रांगण में मारुती का सभामंडप था। हे मंदिर लॉइड्ज पूल (हल्लीचा नवा पूल किंवा शिवाजी पूल) बांधने वाले केंजले ने बांधा. मंदिर में १९ मार्च १९२४ को मारुती की मूर्ती बिहार गई।</p> */}
                    <h5 className='listenNow'>Listen Now <img src={speaker} ref={btn}/></h5>
                </div>
            </div>
            <div className="right-info">
                {/* Add your location and site options here */}
                <div className='right-content'>
                    <img src={www}/>
                    <img src={location}/>
                    <img src={threeD}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default MonumentInfo
