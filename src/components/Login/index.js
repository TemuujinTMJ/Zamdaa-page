import React from 'react';
import { Button } from '../ButtonElements';
import Icon1 from '../../images/tokenlogo.png'
import Icon2 from '../../images/zamdaaaylal.png'
import Icon3 from '../../images/carshare.png'
import Icon4 from '../../images/scooter.png'
import { 
    LoginContainer,
    ServiceWrapper,
    FormCard,
    LoginH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    LoginBanner,
    UnderText,
    LoginForm,
    RegisterHeader,
    UserInput,
    SubmitButton,
    StyledLink,
    TextUnderBanner
 } from './LoginElements';


const Services = () => {
    return (
        <LoginContainer id="login">
            {/* <div style={{width: '1400px', display: 'absolute'}}>
                <LoginH1>Нэвтрэх</LoginH1>
            </div> */}
            <br />
            <ServiceWrapper>
                <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                    <RegisterHeader>Еээ бүртгэлгүй юмуу<span style={{color: "green"}}>?</span></RegisterHeader>
                    <UnderText><StyledLink href="/register">Энд дарж</StyledLink> шинэ бүртгэл үүсгээрэй</UnderText>
                    <FormCard style={{marginTop: '50px', alignSelf: 'center'}}>
                        {/* <ServicesIcon src={Icon3}/>
                        <ServicesP>Та манай апп ашиглан өөрт хамгийн ойр машиныг захиалан унаж, дуртай газраа орхиод явах боломжтой. </ServicesP> */}
                        <LoginForm>
                            <h3 style={{margin: '20px 20px 0 20px'}}>Имейл</h3>
                            <UserInput type="text" placeholder="Имейл" style={{margin: '20px'}} />
                            <h3 style={{margin: '0 20px 0 20px'}}>Нууц үг</h3>
                            <UserInput type="password" placeholder="Нууц үг" style={{margin: '20px'}} />
                            <span style={{margin: '0 20px 0 20px'}}><label for="remme">Намайг сана{" "}</label><input type="checkbox" id="remme" name="remme" /></span>
                            <SubmitButton type="submit" value="Нэвтрэх" style={{margin: '20px'}} />
                        </LoginForm>
                    </FormCard>
                </div>
                <div>
                    <LoginBanner>
                        <img style={{maxWidth: '100%'}} src={Icon1} />
                    </LoginBanner>
                    <TextUnderBanner>
                        Юу вэ ? Ийм хүйтэнд такси барих гээд, битүү автобусанд суух гээд байгаа юм биш биздээ?
                    </TextUnderBanner>
                </div>
            </ServiceWrapper>
        </LoginContainer>
    )
}

export default Services
