import React, { Fragment, useState, useEffect } from 'react'
import Column from './Column'

const getColumns = (imgarr, col) => {
    let images = []
    for (let i = 0; i < col; i++) {
        images.push([])
    }

    let sum = 0;
    imgarr.forEach(img => {
        sum += Number(img.height);
    });

    let threshold = Math.floor(sum / col);
    let current = 0;
    let l = 0;

    imgarr.forEach(img => {
        current += (img.height)
        if ((current + img.height) >= threshold) {
            if (l != col - 1) { l += 1 }
            current = img.height;
            images[l].push(img)
        } else {
            current += img.height;
            images[l].push(img)
        }
    })
    return images
}

function Gallery({ imgarr }) {
    let [columns, setColumns] = useState([]);
    useEffect(() => {
        let mql = window.matchMedia("all and (max-width: 800px)")
        if (mql.matches) {
            setColumns(getColumns(imgarr, 2));
        } else {
            setColumns(getColumns(imgarr, 4));
        }
    }, [])

    return (
        <Fragment className={Gallery}>
            {
                columns.map((img, i) => {
                    return <Column key={i} images={img} />
                })
            }
        </Fragment>
    )
}

export default Gallery
