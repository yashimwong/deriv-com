import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import {
    INDEX10,
    INDEX25,
    INDEX50,
    INDEX75,
    INDEX100,
    INDEX10S1,
    INDEX100S1,
    HFVOL10,
    HFVOL50,
    HFVOL100,
} from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    padding: 0.8rem 0;
    height: unset;
    justify-content: flex-start;
    width: 22.2rem;
    margin: 0 auto;

    svg {
        width: 32px;
        height: 32px;
    }
    ${Text} {
        font-weight: normal;
        margin-left: 1.6rem;
    }
`

const VolatilityIndices = () => {
    return (
        <>
            <Symbol ai="center">
                <HFVOL10 />
                <Text>{localize('HF Volatility 10 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <HFVOL50 />
                <Text>{localize('HF Volatility 50 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <HFVOL100 />
                <Text>{localize('HF Volatility 100 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <INDEX10S1 />
                <Text>{localize('Volatility 10 (1s) Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <INDEX10 />
                <Text>{localize('Volatility 10 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <INDEX25 />
                <Text>{localize('Volatility 25 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <INDEX50 />
                <Text>{localize('Volatility 50 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <INDEX75 />
                <Text>{localize('Volatility 75 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <INDEX100S1 />
                <Text>{localize('Volatility 100 (1s) Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <INDEX100 />
                <Text>{localize('Volatility 100 Index')}</Text>
            </Symbol>
        </>
    )
}

export default VolatilityIndices
