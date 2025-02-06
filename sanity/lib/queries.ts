import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "product"]{
        _id,
        title,
        price,
        Price without Discount,
        badge,
        "image": image.asset->url,
        category,
        description,
        inventory,
        tags,
    
    }`)
    export const fourProducts = defineQuery(`
        *[_type == "product"][0..3]{
            _id,
            title,
            price,
            Price without Discount,
            badge,
            "image": image.asset->url,
            category,
            description,
            inventory,
            tags,
        
        }`)