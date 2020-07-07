import React from 'react'

import Card from './Card'

export default props => {
    // const random = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>Resultado:</span>
                <strong>3</strong>
            </div>
        </Card>
    )
}