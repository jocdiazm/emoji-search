import React from 'react'
import {render,screen} from '@testing-library/react'
import Header from './Header'

describe('Header', ()=>{
    test('should render a header',()=>{
        render(<Header />)
        const headerElement = screen.getByText(/emoji search/i)
        expect(headerElement).toBeInTheDocument()
    })
    
    test('should render two cats',()=>{
        render(<Header />)
        //this is because the imges doesnt have alttext
        //bad practice
        const imgs = screen.getAllByAltText('')
        expect(imgs.length).toBe(2)
        const [firstImg,secondImg] = imgs
        expect(firstImg).toHaveAttribute('src','//cdn.jsdelivr.net/emojione/assets/png/1f638.png')
        expect(secondImg).toHaveAttribute('src','//cdn.jsdelivr.net/emojione/assets/png/1f63a.png')
    })
})
