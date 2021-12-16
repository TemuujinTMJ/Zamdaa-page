import React from 'react';
import { Button } from '../ButtonElements';
import Icon1 from '../../images/tokenlogo.png'
import Icon2 from '../../images/zamdaaaylal.png'
import Icon3 from '../../images/carshare.png'
import Icon4 from '../../images/scooter.png'
import { 
    RegisterContainer,
    ServiceWrapper,
    FormCard,
    RegisterH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    RegisterBanner,
    UnderText,
    RegisterForm,
    RegisterHeader,
    UserInput,
    SubmitButton,
    StyledLink,
    TextUnderBanner
 } from './RegisterElements';


const Services = () => {
    return (
        <RegisterContainer id="register">
            {/* <div style={{width: '1400px', display: 'absolute'}}>
                <RegisterH1>Нэвтрэх</RegisterH1>
            </div> */}
            <br />
            <ServiceWrapper>
                <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                    <RegisterHeader>Бүртгэлтэй байсан хэрэг үү<span style={{color: "green"}}>?</span></RegisterHeader>
                    <UnderText><StyledLink href="/register">Энд дарж</StyledLink> нэвтрэх хэсэг рүү шилжээрэй</UnderText>
                    <FormCard style={{marginTop: '50px', alignSelf: 'center'}}>
                        {/* <ServicesIcon src={Icon3}/>
                        <ServicesP>Та манай апп ашиглан өөрт хамгийн ойр машиныг захиалан унаж, дуртай газраа орхиод явах боломжтой. </ServicesP> */}
                        <RegisterForm>
                            <span style={{display: 'flex', flex:'wrap', flexDirection: 'column',margin: '20px'}}>
                                <label>Нэр</label>
                                <p>
                                    <br />
                                    <UserInput type="text" placeholder="Нэр" />
                                </p>
                            </span>
                            <span style={{display: 'flex', flex:'wrap', flexDirection: 'column',margin: '20px'}}>
                                <label>Овог</label>
                                <p>
                                    <br />
                                    <UserInput type="text" placeholder="Овог" />
                                </p>
                            </span>
                            <span style={{display: 'flex', flex:'wrap', flexDirection: 'column',margin: '20px'}}>
                                <label>Имейл</label>
                                <p>
                                    <br />
                                    <UserInput type="text" placeholder="Имейл" />
                                </p>
                            </span>
                            <span style={{display: 'flex', flex:'wrap', flexDirection: 'column',margin: '20px'}}>
                                <label>Нууц үг</label>
                                <p>
                                    <br />
                                    <UserInput type="password" placeholder="Нууц үг" />
                                </p>
                            </span>
                            <span style={{display: 'flex', flex:'wrap', flexDirection: 'column',margin: '20px'}}>
                                <label>Нууц үг баталгаажуулалт</label>
                                <p>
                                    <br />
                                    <UserInput type="password" placeholder="Нууц үг" />
                                </p>
                            </span>



                            <SubmitButton type="submit" value="Бүртгүүлэх" style={{margin: '20px', float: 'right'}} />
                        </RegisterForm>
                    </FormCard>
                </div>
                <div>
                    <RegisterBanner>
                        <img style={{maxWidth: '100%'}} src={Icon1} />
                    </RegisterBanner>
                    <TextUnderBanner>
                        Юу вэ ? Ийм хүйтэнд такси барих гээд, битүү автобусанд суух гээд байгаа юм биш биздээ?
                    </TextUnderBanner>
                </div>
            </ServiceWrapper>
        </RegisterContainer>
    )
}

export default Services
