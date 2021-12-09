import React from 'react'
import {render,screen} from '@testing-library/react'
import SearchInput from './SearchInput'

describe('Search Input', ()=>{
    test('should render a search input',()=>{
        const result = render(<SearchInput />)
        const searchInputElement = result.container.getElementsByClassName('component-search-input')
        expect(searchInputElement.length).toBe(1)
    })
    
})
