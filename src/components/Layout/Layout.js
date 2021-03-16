import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import styled from 'styled-components'
import Cookies from 'universal-cookie';


const cookies = new Cookies();

// styled elements
const CLayout = styled.div `
    display: grid;
    place-items: center;
`;


class Layout extends Component {

    state = {
        isLoggedin: false,
        count: 1,
        firstImageArray: [
            'https://cdn.agilischemicals.com/assets/82c364e1-7ea8-4a1d-8da5-e7ec85269783.jpg',
            'https://cdn.agilischemicals.com/assets/225395ae-93ea-46f7-bf2b-3b3df5c82e2f.jpg',
            'https://cdn.agilischemicals.com/assets/7a1a0117-39b5-4093-b6b6-911ad4f255a0.jpg'
        ],
        secondImageArray: [
            'https://cdn.agilischemicals.com/assets/20e29ba6-0297-429a-a896-2277986f29f7.jpg',
            'https://cdn.agilischemicals.com/assets/ffbac5f4-5595-43b4-9435-edbb19556110.jpg',
            'https://cdn.agilischemicals.com/assets/1475772d-6ebc-4adf-99b4-6bb94ba1abec.jpg'
        ],
        showindex: 0,
        showmodal: false,
        authcre: {
            'name': 'aguser',
            'password': 'password'
        },
    }

    componentDidMount() {

        //check if the user is logged in on the basis of  if cookie is set 
        const cookieExists = cookies.get('myCokiee');
        if (cookieExists) {
            this.setState({ isLoggedin: true });
        }
        // auto scroll function
        this.autoChange();
    }

    componentWillUnmount() {
        clearInterval(this.autoChange);
    }

    LoginHandler = () => {
        const modalshow = !this.state.showmodal;
        this.setState({ showmodal: modalshow });
    }

    LogoutHandler = () => {
        this.setState({ isLoggedin: false });
        //removing cookie
        cookies.remove('myCokiee');
    }

    nextHandler = () => {
        let updatedindex = this.state.showindex + 1;
        if (updatedindex > 2) {
            updatedindex = 0;
        }
        this.setState({ showindex: updatedindex });
    }

    prevHandler = () => {
        let updatedindex = this.state.showindex - 1;
        if (updatedindex < 0) {
            updatedindex = 2;
        }
        this.setState({ showindex: updatedindex });
    }

    autoChange() {
        setInterval(() => this.nextHandler(), 3000);
    }
    
    // getting credentials from the child component -> modal
    auth = (name, password) => {
        if (this.state.authcre['name'] == name && this.state.authcre['password'] == password) {
            cookies.set('myCokiee', 'agilischemicalsAuthCookie');
            this.setState({ isLoggedin: true });
        } else {
            window.alert("Please check your credentials");
        }
        this.closeModal();
    }

    closeModal = () => {
        const modalshow = !this.state.showmodal;
        this.setState({ showmodal: modalshow });
    }

    render() {
         // modal for signing in ,auth function for fetching credentials .
        let modal;
        if (this.state.showmodal) {
            modal = <Modal handlesub ={this.auth} close={this.closeModal}></Modal>
        }
        return (
            <CLayout>
                    <Header loginflag={this.state.isLoggedin}
                        Loginact={this.LoginHandler}
                        Logoutact={this.LogoutHandler}
                    ></Header>
                   {modal}
                   <Carousel picsArray ={ this.state.isLoggedin ? this.state.secondImageArray: this.state.firstImageArray} 
                            index ={this.state.showindex}
                            next = {this.nextHandler}
                            prev = {this.prevHandler}
                            ></Carousel>
               </CLayout>
        )
    }
}
export default Layout;