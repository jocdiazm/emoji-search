import React from 'react'
import {render,screen, cleanup} from '@testing-library/react'
import EmojiResultRow from './EmojiResultRow'
import emojiList from "./emojiList.json";

const emoji = emojiList[0]

describe('Emoji result row', ()=>{
    
    test('should render an emoji img with atl title',()=>{
        render(<EmojiResultRow title={emoji.title} symbol={emoji.symbol} />)
        const emojiImg = screen.getByAltText(emoji.title)
        expect(emojiImg).toHaveAttribute('alt',emoji.title)
    })
    test('should render text click to copy',()=>{
        render(<EmojiResultRow title={emoji.title} symbol={emoji.symbol} />)
        const spanClick = screen.getByText(/click to copy/i)
        expect(spanClick).toBeInTheDocument()
    })
    test('should render name of the emoji ',()=>{
        render(<EmojiResultRow title={emoji.title} symbol={emoji.symbol} />)
        const emojiName = screen.getByText(emoji.title)
        expect(emojiName).toBeInTheDocument()
    })

    test('should render an emoji with a correct data clipboard',()=>{
        const result = render(<EmojiResultRow title={emoji.title} symbol={emoji.symbol} />)
        const dataClipboardElement = result.container.querySelector(`div`)
        expect(dataClipboardElement ).toHaveAttribute('data-clipboard-text',emoji.symbol)

    })
    
})
