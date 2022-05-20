import React,{useState,useEffect} from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../action/types'

const Product = props => {

    // const product = productData.getProductBySlug()
    const {slug} =useParams();
    const [product,setProduct] = useState({
        _id:'',
        title:'',
        colors:[],
        size:[],
        price:0,
        image:'',
    });
    const [relatedProducts,setRelatedProducts] = useState([]);

    const getProductById = async ()=>{
        try {
            const response = await axios.get(`${API_URL}/api/Product/${slug}`);
            if(response.data.success){
                setProduct(response.data.product);
            }
        } catch (error) {
            alert(error)
        }
    }
    const getProduct = async ()=>{
        try {
            const response = await axios.get(`${API_URL}/api/Product`)
            if(response.data.success){
                setRelatedProducts(response.data.products);
            }
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        getProductById();
        getProduct();
        window.scrollTo(0,0)
    }, [])
    return (
        <Helmet title={product?.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={item._id}
                                    id={item._id}
                                    img01={item.image}
                                    img02={item.image}
                                    name={item.title}
                                    price={item.price}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
