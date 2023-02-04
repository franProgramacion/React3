import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = () => {


const [items, setItems] = useState([]);
const {tipo} = useParams();


useEffect(() => {
    let categoria = "";

    if (tipo === "perfumeria") {
       categoria = "perfumeria";
    } else if (tipo ==="desodorantes") {
       categoria = "desodorantes";
    } else if (tipo ==="cremas") {
        categoria = "cuidados-diarios"; 
    }
        else if (tipo ==="jabones") {
            categoria = "jabones"; }
        else {
       categoria = "all";
    }

    const catalogo =     [
        {"id": 1, "nombre": "todoDia", "precio": 2200, "tipoProd":"perfumeria",  "imagen":"https://staticar.natura.com/cdn/ff/eFksrPOPIWKjB2L2Py7D2sI2gj913v0Eacpwl-senAA/1659738667/public/products/76383_1_15.jpg"},
            {"id": 2, "nombre": "tododia", "precio": 2200,"tipoProd":"perfumeria", "imagen":"https://staticar.natura.com/cdn/ff/AUWHzmSTUQW-do89bESCfvvp9xxc7W2xqBEUpH_8nnA/1661798648/public/products/95841_1_8.jpg"},
            {"id": 3, "nombre": "Desodorante tododia", "precio": 800, "tipoProd": "desodorantes", "imagen": "https://staticar.natura.com/cdn/ff/-JmdnrJXRAqkQ_nh5HlMPnoOQL2r4R-i8VvenrwuOTk/1662487067/public/styles/medium/public/products/105404_1_7.jpg?itok=EPPtW5mh"},
            {"id": 4, "nombre": "Hidratante corporal tododia", "precio": 1500, "tipoProd": "cuidados-diarios", "imagen": "https://staticar.natura.com/cdn/ff/uT3--gGrzLqvWhKzt8MUShrj70zsw1i2IoZKykf8Up4/1662485830/public/products/74898_2_13.jpg"},
            {"id": 5, "nombre": "Hidratante corporal tododia", "precio": 1500, "tipoProd": "cuidados-diarios", "imagen": "https://staticar.natura.com/cdn/ff/rR6TgOQFtWHvwuTVUqVks61O3XUgBL7IRgP3Q2QRbmg/1662493662/public/styles/medium/public/products/74848_1_20.jpg?itok=zpSQ68Yx"},
            {"id": 6, "nombre": "Hidratante corporal tododia", "precio": 1500, "tipoProd": "cuidados-diarios", "imagen": "https://staticar.natura.com/cdn/ff/Hq6Emf5A6JYw6HjJdPxkVh3IdUCMerF8IxWTH8ko-JY/1662491961/public/styles/medium/public/products/75363_1_15.jpg?itok=KGxWuKXO"},
            {"id": 7, "nombre": "Jabones avellana", "precio": 1000, "tipoProd": "jabones", "imagen": "https://staticar.natura.com/cdn/ff/6GJ_B2KnfrYo17SqTkQViC8DqMGE2PHTsVtEWNmES2A/1662487645/public/styles/medium/public/products/74852_1_2.jpg?itok=b7bDLUvH"},
            {"id": 8, "nombre": "Aquas", "precio": 2000,"tipoProd":"perfumeria",  "imagen": "https://staticar.natura.com/cdn/ff/rvDdm5zNfeA3cNZNvOX197RR-u9czWLLy1oajYi-EJk/1657812068/public/products/15435_1_18.jpg"},
            {"id": 9, "nombre": "Ekos", "precio": 3500,"tipoProd":"perfumeria", "imagen": "https://staticar.natura.com/cdn/ff/dRutd-XZr0di5fBENApLPhrITvh_z1TNkW3n5ygv3Fw/1662151818/public/products/78863_1_15.jpg"},
            {"id": 10, "nombre": "Jabones ekos", "precio": 900, "tipoProd": "jabones", "imagen": "https://staticar.natura.com/cdn/ff/lQ5w3xXX4s_mZnz-RcysQItoVylFCNvSx-rCADBnWaY/1662491244/public/styles/medium/public/products/30460_1_20.jpg?itok=PqbLGkw-"},
            {"id": 11, "nombre": "Jabones ekos", "precio": 900, "tipoProd": "jabones", "imagen": "https://staticar.natura.com/cdn/ff/QpufX2J5pOzn-foU8-RKCS0BEKvraFgwclc7jfAVnPE/1662484476/public/products/72984_2_21.jpg"},
            {"id": 12, "nombre": "Humor", "precio": 3600,"tipoProd":"perfumeria", "imagen": "https://cosmeticoslucia.ar/wp-content/uploads/2021/01/Humor-da-minha-vida.jpg"},
            {"id": 13, "nombre": "Humor", "precio": 3600,"tipoProd":"perfumeria", "imagen": "https://staticar.natura.com/cdn/ff/CBqTbe8vhShl31qnyDxWkQIuwgcxPikReJQHeKsbswc/1659582745/public/products/8688_1_6.jpg"},
            {"id": 14, "nombre": "Kaiak", "precio": 3500,"tipoProd":"perfumeria", "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/014/432/products/6255da1f-0c39-402f-80b5-126bbd5b6a5a1-78af6510df135ef31315648772364532-1024-1024.jpg"},
            {"id": 15, "nombre": "Kaiak", "precio": 3500,"tipoProd":"perfumeria", "imagen": "https://staticar.natura.com/cdn/ff/2undcseor_ibkE5JCAmiceNeoUSY54wNj0K5NtDpjao/1654615244/public/products/67884_2_3.jpg"},
            {"id": 16, "nombre": "Desodorante Kaiak", "precio": 700, "tipoProd":"desodorantes","imagen": "https://staticar.natura.com/cdn/ff/zKzlLhla0rVRu4Yjq90B7Q4Sk_2GD_MZ2n5Pj5I6MVg/1662496658/public/styles/medium/public/products/112081_1_2.jpg?itok=TDnhAQi-"},
            {"id": 17, "nombre": "Jabon liquido", "precio": 500, "tipoProd": "jabones", "imagen": "https://staticar.natura.com/cdn/ff/tpK6Z681moR9BRqDa4_Um1TGdShq5Yz3DKh9_Q5-05M/1662478678/public/styles/medium/public/products/103983_1_7.jpg?itok=N0BptZW_"},
            {"id": 18, "nombre": "Desodorante Corporal Urbe","tipoProd":"desodorantes", "precio": 1125, "imagen": "https://staticar.natura.com/cdn/ff/2aJPZlVw_dZ_XyJb8bgDYuIsHD6S3ZjFFVNRCh6pOlU/1662484155/public/styles/medium/public/products/56740_1_2.jpg?itok=KNQTr5A3"},
            {"id": 19, "nombre": "Kriska", "precio": 2700,"tipoProd":"perfumeria", "imagen": "https://staticar.natura.com/cdn/ff/XumBsuwtmYjjGziGkezm5FOuhjL4RHNUMSGZllAUcP4/1656117027/public/products/75882_1_2.jpg"},
            {"id": 20, "nombre": "Kriska", "precio": 3500,"tipoProd":"perfumeria","imagen": "https://staticar.natura.com/cdn/ff/Y8nqO-1cpkyYy_Q1MbwlG-iVmr5sdiKBjQojvD_GcDE/1662152082/public/products/83323_1_10.jpg"},
            {"id": 21, "nombre": "Luna", "precio": 2000,"tipoProd":"perfumeria","imagen": "https://d2j6dbq0eux0bg.cloudfront.net/images/44951638/1929305246.jpg"},
            {"id": 22, "nombre": "Luna", "precio": 2500,"tipoProd":"perfumeria", "imagen": "https://staticar.natura.com/cdn/ff/xQS4e7UH9F3iqx4ftB3ECL8yRXvCHqc-CTYWXxfaJBo/1661787655/public/products/50238_1_18.jpg"},
            {"id": 23, "nombre": "Biografia", "precio": 2700,"tipoProd":"perfumeria","imagen": "https://fraguru.com/mdimg/perfume/375x500.31812.jpg"},
            {"id": 24, "nombre": "Biografia", "precio": 2200,"tipoProd":"perfumeria","imagen": "https://fraguru.com/mdimg/perfume/375x500.47151.jpg"},
            {"id": 25, "nombre": "Natura Erva Doce desodorante","tipoProd":"desodorantes", "precio": 725,"imagen": "https://staticar.natura.com/cdn/ff/ugVBjdGK396lKsj3EFz-YfzyQfCGIaALPmaOgALB5tM/1662491858/public/styles/medium/public/products/2179_1_14.jpg?itok=Py2hXg3M"}

    ];

    const promesa = new Promise ((resolve,reyect) => {
        setTimeout(() => {
            if (true) {
                resolve(catalogo);
            } else {
                reyect ("Error en la carga de datos");
            }
        },2000);

    }).catch (error => {
        console.log("Error: " + error);
    });
    

    promesa.then((respuesta) => {
        if (categoria === "all" ){
            setItems(respuesta);
            console.log(respuesta);                    
        } else {
            const arrayProd = catalogo.filter(catalogo => catalogo.tipoProd === categoria);
            setItems(arrayProd);
        }

    }); 
 }, [tipo]);

    return(
        <div className='container'>
            <ItemList items={items}/>
        </div>
    )

    }

export default ItemListContainer;