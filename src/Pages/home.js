import React, { Component } from 'react'
import Layout from '../Components/Layout'
import { logo, demo } from '../Components/Image'

export class Home extends Component {
    render() {
        return (
            <Layout>
                <img src={demo} height='600' width='100%' alt="" />
            </Layout>
        )
    }
}

export default Home
