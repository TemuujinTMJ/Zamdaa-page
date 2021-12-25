import React from 'react';
import {Button } from '../ButtonElements';
import Icon1 from '../../images/zamdaaturees.png'
import Icon2 from '../../images/zamdaaaylal.png'
import Icon3 from '../../images/carshare.png'
import Icon4 from '../../images/scooter.png'
import { FaAndroid, FaApple} from 'react-icons/fa';
import { 
    ServicesContainer,
    ServiceWrapper,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    BtnCointainer
 } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Бидний Төслүүд</ServicesH1>
            <ServiceWrapper>
            <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Zamdaa.CarShare</ServicesH2>
                    <ServicesP>Та манай апп ашиглан өөрт хамгийн ойр машиныг захиалан унаж, дуртай газраа орхиод явах боломжтой. </ServicesP>
                    <Button  href="https://www.facebook.com/carshare.mn" target="_blank">Дэлгэрэнгүй</Button>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Zamdaa.Scooter</ServicesH2>
                    <ServicesP>Та манай апп ашиглан өөрт хамгийн ойр цахилгаан скутерыг захиалан унаж, дуртай газраа орхиод явах боломжтой.</ServicesP>
                    <Button  href="https://www.google.com" target="_blank">Дэлгэрэнгүй</Button>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Zamdaa.Turees</ServicesH2>
                    <ServicesP>Анхны peer-to-peer буюу хэрэглэгч хоорондын машин түрээсийн платформ.</ServicesP><br/>
                    <Button href="https://www.facebook.com/mashinturees.mn" target="_blank" >Дэлгэрэнгүй</Button>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Zamdaa.Aylal</ServicesH2>
                    <ServicesP> Хот хооронд зорчих жолооч, зорчигчийг найдвартай хангах цорын ганц дайх, дайгдах аппликейшн.</ServicesP>
                    <BtnCointainer>
                        <Button href="https://play.google.com/store/apps/details?id=mn.zamdaa" target="_blank"><FaAndroid/><p>&nbsp;&nbsp;</p>Android</Button>
                        <p>&nbsp;&nbsp;</p>
                        <Button href="https://apps.apple.com/nz/app/zamdaa-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BD-%D1%83%D0%BD%D0%B0%D0%B0/id1309089244" target="_blank"><FaApple/><p>&nbsp;&nbsp;</p>IOS</Button>
                    </BtnCointainer>
                    
                </ServicesCard>
            </ServiceWrapper>
        </ServicesContainer>
    )
}

export default Services
