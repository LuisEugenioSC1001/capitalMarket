import React, { useState } from 'react'
import Modal from './Modal'
import { Button, Grid, Container, TextField, Autocomplete } from '@mui/material'
import apiBaseUrl from '../utils/Api';

export default function NewProduct() {
    const categorias = ["Comida","Juguetes"];
    const [nameProduct, setNameProduct] = useState("");
    const handleNameProduct = e => setNameProduct(e.target.value);

    const [descriptionProduct, setDescription] = useState("");
    const handleDescription = e => setDescription(e.target.value);

    const [priceProduct, setPriceProduct] = useState("");
    const handlePriceProduct = e => setPriceProduct(e.target.value);

    const [stockProduct, setStockProduct] = useState("");
    const handleStockProduct = e => setStockProduct(e.target.value);

    const [categoriesProduct, setCategories] = useState("");
    const handleCategories = (event, value) => setCategories(value);

    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    }

    
    const submitForm = async () => {
        if (nameProduct === "" || descriptionProduct === "" || priceProduct === "" || stockProduct === "") {
            toggle();
        } else {
            const shop = sessionStorage.getItem('User') === null ? JSON.parse(localStorage.getItem('User')).shop : JSON.parse(sessionStorage.getItem('User')).shop;
            const productData = {
                name: nameProduct,
                price: priceProduct,
                stock: stockProduct,
                category: categoriesProduct,
                nameShop: shop,
                description: descriptionProduct
            }
            try {
                const response = await fetch(`${apiBaseUrl}/productRegister`, {
                    method: 'POST',
                    body: JSON.stringify(productData),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const productResponse = await response.json();
                toggle();
                
            }
            catch (e) {
                console.log(e)
            }

        }
    }
    return (
        <>
            <Button variant='outlined' onClick={() => toggle()}>New Product</Button>
            <Modal active={active} toggle={toggle}>
                <Container maxWidth='sm'>
                    <Grid container spacing={2} my={2}>
                        <Grid item xs={12}>
                            <TextField id="NameProduct" onChange={handleNameProduct} label="Name of Product" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField multiline rows={5} onChange={handleDescription} rowsMax={10} id="DescriptionPoduct" label="Description" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Autocomplete id='categorias' onChange={handleCategories} options={categorias} renderInput={(params) => (<TextField {...params} label="Category" />)} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField id="Stock" label="Stock" onChange={handleStockProduct} variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField id="Price" label="Price $" onChange={handlePriceProduct} variant="outlined" fullWidth />
                        </Grid>
                        <Grid item container xs={12} justifyContent='space-between'>
                            <Button variant='outlined' onClick={() => toggle()} >Cancel</Button>
                            <Button variant='contained' onClick={submitForm}>Save</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Modal>
            

        </>
    )

}
