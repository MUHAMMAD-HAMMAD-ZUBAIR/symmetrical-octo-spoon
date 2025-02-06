import { defineType, defineField } from "sanity";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Category Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'image',
            title: 'Category Image',
            type: 'image',
        }),
        defineField({
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        })
    ],
});