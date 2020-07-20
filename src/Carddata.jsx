const Cardata = [
    {
        id: 1,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQjNneWs0FW15zkfazr9Vl_rQtlEOSur1f897sgv6sGFZn7iFqamEAqNMX4yUmQB8m0CNWUL9HAwGN_T07Qb1W3zR_0uPbOBHWN0b5IwOZjkgMRDztlm3GYu7IGN.jpg?r=c52',
        title: 'The Old Gaurd',
        rating: '8.9',
        genre: 'Action Thriller',
        link: 'https://www.netflix.com/vn-en/title/81038963'
    },
    
    {
        id: 2,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSMHMUe9HirN-UXFKfTb--WcxRInwcgbrKN9T0gnPXXnWQD9blPDC1NcR4esmGPSdhmL6iAYJgfIdhTHM4SSWUVPwqk8wE49cS_7nyp4l-YQJuXTXwfvnkq9jgW4.jpg?r=568',
        title: 'Money Heist',
        rating: '8.9',
        genre: 'Spanish TV Show',
        link: 'https://www.netflix.com/vn-en/title/80192098'
    },
    
    {
        id: 3,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRmOnDR-liubnemSbA8LhNP6gHXnqCEAlboYLL54RfV0LDW6a8RQhVjOLR2gtkjsA67vkh-fPzugDwRodNZd8kb0DeR9wZPcHViOxgjn71zM0joN_JG8qeEDOKmM.jpg?r=080',
        title: 'Crash Landing on You',
        rating: '7.4',
        genre: 'K-dramas',
        link: 'https://www.netflix.com/vn-en/title/81159258'
    },
    
    {
        id: 4,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa-oTyIxZjZX2RV59zIXh0I_NOJB16m7Iky-RTZ9jqavv58JOO4FcsoW_WH_vKdt9Cu8ZIZxDmDqb6FvEk6zj2aMp-GajzsrK9qJcFKdVZ7oNofBA9redABpGuwb.jpg?r=973',
        title: 'Narcos',
        rating: '7.9',
        genre: 'TV Action',
        link: 'https://www.netflix.com/vn-en/title/80025172'
    },
    
    {
        id: 5,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXr99-I9s8cPs-OmzMh327Kr7WpYGIHBNO2yFz5HggMEolpHIGWmHpugXt5j7V14ilbGfDqkGacCDprBQ2CJF0iBPYu899N3nk_CTMciN3eDA0KTNedUl58uh7RQ.jpg?r=285',
        title: 'The Punisher',
        rating: '6.5',
        genre: 'TV Thriller',
        link: 'https://www.netflix.com/vn-en/title/80117498'
    },
    
    {
        id: 6,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR0wgLEV2816H0nEmYcdqKsQzgE5Bk04qONKvyogMIGRLaN5B9HMGmZ2xxwIFx2_4ViB2VtOaUDTTlYKedTBK6fasfCWyCXOP7QLPMcx9S_YFzeQZGvfeN9KxJKFBQ.jpg?r=4a0',
        title: 'The Defenders',
        rating: '8.1',
        genre: 'TV Thriller',
        link: 'https://www.netflix.com/vn-en/title/80002566'
    },
    
    {
        id: 7,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWpPqp4M2iDOh8w99Rs9NmuG9J7AZVL7Zs5I62DN143NcODivByUfishCrYgqNdT3y6JnK4AmGc3ZLIAgRFcQPdsbNkTnYUNHC041Fh22y3KL8-rrOO9ArPdMdMqgw.jpg?r=8fa',
        title: 'Wu Assassins',
        rating: '7.4',
        genre: 'TV Sci-Fi & Fantasy',
        link: 'https://www.netflix.com/vn-en/title/80230293'
    },
    
    {
        id: 8,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV4t_2jZy2YoG6eqLDrcQKdMRyhk4IpArEhM_IvgLe4iFhflA2lYhNIMks0d_eetbc626eNUCIRsTgcCmfPg054XKnvzg3rurjsx3XNcv72pRTDXsG-Afrtlu_YP0Q.jpg?r=a44',
        title: 'October Faction',
        rating: '7.1',
        genre: 'TV Sci-Fi & Fantasy',
        link: 'https://www.netflix.com/vn-en/title/80221644'
    },
    
    {
        id: 9,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXBflIlMqDubD3iT2EpT9UyWp81HH3udgbSp9knwll6ghX_HrYFRyofOjOD7QO10z8Zp8YPdBD8O7b7mPcdla3waldBuW27Yag1ruzrEruyWjhBRQprOCFnTcE1gSA.jpg?r=130',
        title: 'Hemlock Grove',
        rating: '6.9',
        genre: 'TV Sci-Fi & Fantasy',
        link: 'https://www.netflix.com/vn-en/title/70242310'
    },
    
    {
        id: 10,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV426xPwBK3gxDjtfR-uebHhuZacsllsjrqBoKkJdDYVsJLgY4WTYKPUg1Gc9hXCYATCDnX-cQbMHVktk94fjQz6mloZiwWMkPuneJSIpmFCZc_u0WENl2WIWWCyHw.jpg?r=150',
        title: 'Van Helsing',
        rating: '7.2',
        genre: 'TV Sci-Fi & Fantasy',
        link: 'https://www.netflix.com/vn-en/title/80121349'
    },
    
    {
        id: 12,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf4GSxr0dY2mPCKjKhp-eeVw4bYi9Dq8gKUEuDvFeitc0GPhmye4pQEcnsyvt0L_WifJiauYLPfJOn4mnbbRDvBx8JXJ291LaRqSw7fBjzhx1QZKasEcOYbkGJniEA.jpg?r=0e2',
        title: 'Vampires',
        rating: '8.5',
        genre: 'TV Sci-Fi & Fantasy',
        link: 'https://www.netflix.com/vn-en/title/80222720'
    },
    
    {
        id: 13,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe6Z5di4fqtXMevyHUWlbzGfbXH8MlpBmuT1yma82pOpSgk-OPtZpvxQhWPursFcCsjjHP62Tcm6b0udkdnwQC64jw5zoBICElo_hVXu8xtD_tlVBBrUkt1eeGOK_g.jpg?r=185',
        title: 'Ragnarok',
        rating: '8.5',
        genre: 'TV Shows',
        link: 'https://www.netflix.com/vn-en/title/80232926'
    },
    
    {
        id: 14,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbSvRipbgDHUBcCXagiscNgkVlgfxAsIVjrjt59S7bZQdeoX88Qz3-XC9lpHB5UABYm4Di2jY33n3I2JKIGbn559goMjO1SdMx1lYc_zKAzRxlO2Kd-lkFbxxOjsgw.jpg?r=1cf',
        title: 'Black Lightning',
        rating: '5.4',
        genre: 'TV Sci-Fi & Fantasy',
        link: 'https://netflix.com/vn-en/title/80178687'
    },
    
    {
        id: 15,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZFz0T5Q3oJZnhfX5M7HeKgidL6Z8_Xfj2z9OHh-xtuFv3hPgo5chok3jSWBv-9WWk9jNNhhggIZNgUTt0wdpJJxVFoxtsL0Q-d7i2m22hmu7Ny6GygUuNA8CODCfQ.jpg?r=6d8',
        title: 'Point Blank',
        rating: '6.7',
        genre: 'Action & Adventure',
        link: 'https://www.netflix.com/vn-en/title/80221677'
    },
    
    {
        id: 16,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeZxfMp2GzyjZbOHdW9ABeQCZMHXlZumxEbpsZDc_35nVYLc59nO-ksegI1yhJdDreWBcegdSrW-XTKHhgyC76m7oDwP1Qgo45w2Oa4Mk925twe_LIEM2PCOYiCZaQ.jpg?r=6a7',
        title: 'Hold the dark',
        rating: '6.7',
        genre: 'Dramas',
        link: 'https://www.netflix.com/vn-en/title/80157072'
    },
    
    {
        id: 17,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdp7bXLNoe66WOIvSrptw4f2POoYKsiaf_nJ8ldhRDCZ0ehMhQzwX2yhPcMcdjknCF_AExDQZdNuzndwN5rUT21PZlCn8XHn6-pOP_rOGMWccFyn3asJWeFC7GO7wg.jpg?r=a62',
        title: 'Polar',
        rating: '6.7',
        genre: 'Action & Adventure',
        link: 'https://www.netflix.com/vn-en/title/80223052'
    },
    
    {
        id: 18,
        imgurl: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdH_ucTUbZJnb0JcswJMfltdk4NlLJOrKwwgA067r_Wd9OCC1Lr8M6yOmNm_BM7nHMnb3jrQvqATTfw-UkpjXnds-IHp5gxlOLG1VSGvmIv2A3gs0NXPM0Di48dBYg.jpg?r=1f1',
        title: 'Paradise Beach',
        rating: '7.7',
        genre: 'French Movies',
        link: 'https://www.netflix.com/vn-en/title/81079723'
    },
] 

export default Cardata;