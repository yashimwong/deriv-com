import React from 'react'
import {
    INDEX10,
    INDEX25,
    INDEX50,
    INDEX75,
    INDEX100,
    INDEX10S1,
    INDEX100S1,
    INDEX25S1,
    INDEX50S1,
    INDEX75S1,
    RANGEBREAK100,
    RANGEBREAK200,
    STEPINDICES,
    AUDCAD,
    AUDCHF,
    AUDNZD,
    AUDJPY,
    AUDUSD,
    BCHUSD,
    BTCUSD,
    CADCHF,
    CADJPY,
    CLBRENT,
    DAX30,
    DSHUSD,
    EOSUSD,
    EURNZD,
    GBPCAD,
    GBPCHF,
    GBPNZD,
    HFVOL10,
    HFVOL50,
    HFVOL100,
    LTCUSD,
    NZDCAD,
    USDZAR,
    NZDJPY,
    GOLDUSD,
    PALLADIUMUSD,
    PLATINUMUSD,
    SILVERUSD,
    OILUSD,
    EURCAD,
    EURCHF,
    EURGBP,
    EURJPY,
    EURUSD,
    GBPAUD,
    GBPJPY,
    GBPUSD,
    USDCAD,
    USDCHF,
    USDJPY,
    BOOM500,
    BOOM1000,
    CRASH500,
    CRASH1000,
    CHFJPY,
    NZDUSD,
    XRPUSD,
    EURINDEX,
    AUDINDEX,
    GBPINDEX,
    USDINDEX
} from 'components/elements/symbols.js'
import { localize } from 'components/localization'

export const optionItemDefault = {
    name: 'default',
    display_name: '',
    key: '14',
    icon: '',
    market: '',
}

export const optionLeverageDefault = {
    name: 'value',
    display_name: '',
    key: '14',
    icon: '',
    market: '',
}

export const leverageItemLists = [
    { name: 4000, display_name: 4000, key: '1', icon: '' },
    { name: 3500, display_name: 3500, key: '2', icon: '' },
    { name: 3000, display_name: 3000, key: '3', icon: '' },
    { name: 2500, display_name: 2500, key: '4', icon: '' },
    { name: 2000, display_name: 2000, key: '5', icon: '' },
    { name: 1500, display_name: 1500, key: '6', icon: '' },
    { name: 1000, display_name: 1000, key: '7', icon: '' },
    { name: 900, display_name: 900, key: '8', icon: '' },
    { name: 800, display_name: 800, key: '9', icon: '' },
    { name: 700, display_name: 700, key: '10', icon: '' },
    { name: 600, display_name: 600, key: '11', icon: '' },
    { name: 500, display_name: 500, key: '12', icon: '' },
    { name: 400, display_name: 400, key: '13', icon: '' },
    { name: 200, display_name: 200, key: '14', icon: '' },
    { name: 100, display_name: 100, key: '15', icon: '' },
    { name: 50, display_name: 50, key: '16', icon: '' },
    { name: 30, display_name: 30, key: '17', icon: '' },
    { name: 5, display_name: 5, key: '18', icon: '' },
]

export const syntheticItemLists = [
    {
        name: 'Boom 1000 Index',
        display_name: localize('Boom 1000 Index'),
        icon: <img src={BOOM1000} alt="boom 100" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Boom 500 Index',
        display_name: localize('Boom 500 Index'),
        icon: <img src={BOOM500} alt="boom 500" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Crash 1000 Index',
        display_name: localize('Crash 1000 Index'),
        icon: <img src={CRASH1000} alt="crash 1000" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Crash 500 Index',
        display_name: localize('Crash 500 Index'),
        icon: <img src={CRASH500} alt="crash 500" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Range Break 100 Index',
        display_name: localize('Range Break 100 Index'),
        icon: <img src={RANGEBREAK100} alt="" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Range Break 200 Index',
        display_name: localize('Range Break 200 Index'),
        icon: <img src={RANGEBREAK200} alt="range break 200" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Step Index',
        display_name: localize('Step Index'),
        icon: <img src={STEPINDICES} alt="step index" />,
        market: 'synthetic_indices',
    },
    {
        name: 'HF Volatility 10 Index',
        display_name: localize('HF Volatility 10 Index'),
        icon: <img src={HFVOL10} alt="hf vol 10" />,
        market: 'synthetic_indices',
    },
    {
        name: 'HF Volatility 50 Index',
        display_name: localize('HF Volatility 50 Index'),
        icon: <img src={HFVOL50} alt="hf vol 50" />,
        market: 'synthetic_indices',
    },
    {
        name: 'HF Volatility 100 Index',
        display_name: localize('HF Volatility 100 Index'),
        icon: <img src={HFVOL100} alt="hf vol 100" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 10 (1s) Index',
        display_name: localize('Volatility 10 (1s) Index'),
        icon: <img src={INDEX10S1} alt="vol 10 1s" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 10 Index',
        display_name: localize('Volatility 10 Index'),
        icon: <img src={INDEX10} alt="vol 10" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 25 (1s) Index',
        display_name: localize('Volatility 25 (1s) Index'),
        icon: <img src={INDEX25S1} alt="vol 25 1s" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 25 Index',
        display_name: localize('Volatility 25 Index'),
        icon: <img src={INDEX25} alt="" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 50 (1s) Index',
        display_name: localize('Volatility 50 (1s) Index'),
        icon: <img src={INDEX50S1} alt="vol 50 1s" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 50 Index',
        display_name: localize('Volatility 50 Index'),
        icon: <img src={INDEX50} alt="vol 50" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 75 (1s) Index',
        display_name: localize('Volatility 75 (1s) Index'),
        icon: <img src={INDEX75S1} alt="vol 75 1s" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 75 Index',
        display_name: localize('Volatility 75 Index'),
        icon: <img src={INDEX75} alt="vol 75" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 100 (1s) Index',
        display_name: localize('Volatility 100 (1s) Index'),
        icon: <img src={INDEX100S1} alt="vol 100 1s" />,
        market: 'synthetic_indices',
    },
    {
        name: 'Volatility 100 Index',
        display_name: localize('Volatility 100 Index'),
        icon: <img src={INDEX100} alt="vol 100" />,
        market: 'synthetic_indices',
    },
]

export const financialItemLists = [
    {
        name: 'DAX_30',
        display_name: localize('DAX_30'),
        icon: <img src={DAX30} alt="dax 30" />,
        market: 'other',
    },
    {
        name: 'CL_BRENT',
        display_name: localize('CL_BRENT'),
        icon: <img src={CLBRENT} alt="cl brent" />,
        market: 'other',
    },
    {
        name: 'BCHUSD',
        display_name: localize('BCH/USD'),
        icon: <img src={BCHUSD} alt="bch usd" />,
        market: 'crypto',
    },
    {
        name: 'BTCUSD',
        display_name: localize('BTC/USD'),
        icon: <img src={BTCUSD} alt="btc usd" />,
        market: 'crypto',
    },
    {
        name: 'DSHUSD',
        display_name: localize('DSH/USD'),
        icon: <img src={DSHUSD} alt="dsh usd" />,
        market: 'crypto',
    },
    {
        name: 'EOSUSD',
        display_name: localize('EOS/USD'),
        icon: <img src={EOSUSD} alt="eos usd" />,
        market: 'crypto',
    },
    {
        name: 'LTCUSD',
        display_name: localize('LTC/USD'),
        icon: <img src={LTCUSD} alt="ltc usd" />,
        market: 'crypto',
    },
    {
        name: 'XRPUSD',
        display_name: localize('XRP/USD'),
        icon: <img src={XRPUSD} alt="xrp usd" />,
        market: 'crypto',
    },
    {
        name: 'AUDCAD',
        display_name: localize('AUD/CAD'),
        icon: <img src={AUDCAD} alt="aud cad" />,
        market: 'forex',
    },
    {
        name: 'AUDCHF',
        display_name: localize('AUD/CHF'),
        icon: <img src={AUDCHF} alt="aud chf" />,
        market: 'forex',
    },
    {
        name: 'AUDJPY',
        display_name: localize('AUD/JPY'),
        icon: <img src={AUDJPY} alt="aud jpy" />,
        market: 'forex',
    },
    {
        name: 'AUDNZD',
        display_name: localize('AUD/NZD'),
        icon: <img src={AUDNZD} alt="aud nzd" />,
        market: 'forex',
    },
    {
        name: 'AUDUSD',
        display_name: localize('AUD/USD'),
        icon: <img src={AUDUSD} alt="aud usd" />,
        market: 'forex',
    },
    {
        name: 'EURCAD',
        display_name: localize('EUR/CAD'),
        icon: <img src={EURCAD} alt="eur cad" />,
        market: 'forex',
    },
    {
        name: 'EURCHF',
        display_name: localize('EUR/CHF'),
        icon: <img src={EURCHF} alt="eur chf" />,
        market: 'forex',
    },
    {
        name: 'EURGBP',
        display_name: localize('EUR/GBP'),
        icon: <img src={EURGBP} alt="eur gbp" />,
        market: 'forex',
    },
    {
        name: 'EURJPY',
        display_name: localize('EUR/JPY'),
        icon: <img src={EURJPY} alt="eur jpy" />,
        market: 'forex',
    },
    {
        name: 'EURNZD',
        display_name: localize('EUR/NZD'),
        icon: <img src={EURNZD} alt="eur nzd" />,
        market: 'forex',
    },
    {
        name: 'EURUSD',
        display_name: localize('EUR/USD'),
        icon: <img src={EURUSD} alt="eur usd" />,
        market: 'forex',
    },
    {
        name: 'GBPCHF',
        display_name: localize('GBP/CHF'),
        icon: <img src={GBPCHF} alt="gbp chf" />,
        market: 'forex',
    },
    {
        name: 'GBPJPY',
        display_name: localize('GBP/JPY'),
        icon: <img src={GBPJPY} alt="gbp jpy" />,
        market: 'forex',
    },
    {
        name: 'GBPUSD',
        display_name: localize('GBP/USD'),
        icon: <img src={GBPUSD} alt="gbp usd" />,
        market: 'forex',
    },
    {
        name: 'NZDUSD',
        display_name: localize('NZD/USD'),
        icon: <img src={NZDUSD} alt="nzd usd" />,
        market: 'forex',
    },
    {
        name: 'USDCAD',
        display_name: localize('USD/CAD'),
        icon: <img src={USDCAD} alt="usd cad" />,
        market: 'forex',
    },
    {
        name: 'USDCHF',
        display_name: localize('USD/CHF'),
        icon: <img src={USDCHF} alt="usd chf" />,
        market: 'forex',
    },
    {
        name: 'USDJPY',
        display_name: localize('USD/JPY'),
        icon: <img src={USDJPY} alt="usd jpy" />,
        market: 'forex',
    },
    {
        name: 'CADCHF',
        display_name: localize('CAD/CHF'),
        icon: <img src={CADCHF} alt="cad chf" />,
        market: 'forex',
    },
    {
        name: 'CADJPY',
        display_name: localize('CAD/JPY'),
        icon: <img src={CADJPY} alt="cad jpy" />,
        market: 'forex',
    },
    {
        name: 'GBPAUD',
        display_name: localize('GBP/AUD'),
        icon: <img src={GBPAUD} alt="gbp aud" />,
        market: 'forex',
    },
    {
        name: 'GBPCAD',
        display_name: localize('GBP/CAD'),
        icon: <img src={GBPCAD} alt="gbp cad" />,
        market: 'forex',
    },
    {
        name: 'GBPNZD',
        display_name: localize('GBP/NZD'),
        icon: <img src={GBPNZD} alt="gbp nzd" />,
        market: 'forex',
    },
    {
        name: 'NZDCAD',
        display_name: localize('NZD/CAD'),
        icon: <img src={NZDCAD} alt="nzd cad" />,
        market: 'forex',
    },
    {
        name: 'NZDJPY',
        display_name: localize('NZD/JPY'),
        icon: <img src={NZDJPY} alt="nzd jpy" />,
        market: 'forex',
    },
    {
        name: 'USDZAR',
        display_name: localize('USD/ZAR'),
        icon: <img src={USDZAR} alt="usd zar" />,
        market: 'forex',
    },
    {
        name: 'CHFJPY',
        display_name: localize('CHF/JPY'),
        icon: <img src={CHFJPY} alt="chf  jpy" />,
        market: 'forex',
    },
    {
        name: 'WTI_OIL',
        display_name: localize('Oil/USD'),
        icon: <img src={OILUSD} alt="oil usd" />,
        market: 'commodities',
    },
    {
        name: 'XAUUSD',
        display_name: localize('Gold/USD'),
        icon: <img src={GOLDUSD} alt="gold usd" />,
        market: 'commodities',
    },
    {
        name: 'XAGUSD',
        display_name: localize('Silver/USD'),
        icon: <img src={SILVERUSD} alt="silver usd" />,
        market: 'commodities',
    },
    {
        name: 'XPDUSD',
        display_name: localize('Palladium/USD'),
        icon: <img src={PALLADIUMUSD} alt="palladium usd" />,
        market: 'commodities',
    },
    {
        name: 'XPTUSD',
        display_name: localize('Platinum/USD'),
        icon: <img src={PLATINUMUSD} alt="platinum usd" />,
        market: 'commodities',
    },
    {
        name: 'AUDINDEX',
        display_name: localize('AUD Index'),
        icon: <img src={AUDINDEX} alt="aud index" />,
        market: 'smartfx',
    },
    {
        name: 'GBPINDEX',
        display_name: localize('GBP Index'),
        icon: <img src={GBPINDEX} alt="gbp index" />,
        market: 'smartfx',
    },
    {
        name: 'EURINDEX',
        display_name: localize('EUR Index'),
        icon: <img src={EURINDEX} alt="eur index" />,
        market: 'smartfx',
    },
    {
        name: 'USDINDEX',
        display_name: localize('USD Index'),
        icon: <img src={USDINDEX} alt="usd index" />,
        market: 'smartfx',
    },
    {
        name: 'GOLDINDEX',
        display_name: localize('Gold Index'),
        icon: <img src={GOLDUSD} alt="gold index" />,
        market: 'smartfx',
    },
]
