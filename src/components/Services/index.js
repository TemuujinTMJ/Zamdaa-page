import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
import { 
    ServicesContainer,
    ServiceWrapper,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
 } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServiceWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>

            </ServiceWrapper>
        </ServicesContainer>
    )
}

export default Services
