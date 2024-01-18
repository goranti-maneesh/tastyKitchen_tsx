/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        letterSpacing: {
            0.013: "0.013",
        },
        borderRadius: {
            sm: "2px",
            lg: "8px",
            xl: "12px",
            "133px": "133px",
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            2: "2px",
            3: "3px",
            4: "4px",
            6: "6px",
            8: "8px",
        },
        extend: {
            fontFamily: {
                serif: ["Bree Serif"],
            },
            spacing: {
                "1px": "1px",
                "5px": "5px",
                "7px": "7px",
                "18px": "18px",
                "10px": "10px",
                "21px": "21px",
                "23px": "23px",
                "30px": "30px",
                "40px": "40px",
                "49px": "49px",
                "54px": "54px",
                "63px": "63px",
                "68px": "68px",
                "142px": "142px",
                "239px": "239px",
                "415px": "415px",
                "609px": "609px",
                10: "10%",
            },
            width: {
                "1px": "1px",
                "12px": "12px",
                "16px": "16px",
                "18px": "18px",
                "24px": "24px",
                "39px": "39px",
                "40px": "40px",
                "48px": "48px",
                "49px": "49px",
                "50vw": "50vw",
                "53px": "53px",
                "58px": "58px",
                "73px": "73px",
                "80px": "80px",
                "89vw": "89vw",
                "100px": "100px",
                "112px": "112px",
                "136px": "136px",
                "140px": "140px",
                "145px": "145px",
                "150px": "150px",
                "160px": "160px",
                "161px": "161px",
                "168px": "168px",
                "203px": "203px",
                "221px": "221px",
                "269px": "269px",
                "255px": "255px",
                "280px": "280px",
                "312px": "312px",
                "350px": "350px",
                "360px": "360px",
                "387px": "387px",
                "426px": "426px",
                "445px": "445px",
                "450px": "450px",
                "456px": "456px",
                "479px": "479px",
                "1110px": "1110px",
                40: "40%",
                30: "30%",
            },
            height: {
                "2px": "2px",
                "12px": "12px",
                "16px": "16px",
                "18px": "18px",
                "24px": "24px",
                "32px": "32px",
                "33px": "33px",
                "38px": "38px",
                "39px": "39px",
                "40px": "40px",
                "43px": "43px",
                "48px": "48px",
                "50vh": "50vh",
                "64px": "64px",
                "80px": "80px",
                "90px": "90px",
                "96px": "96px",
                "100px": "100px",
                "112px": "112px",
                "150px": "150px",
                "155px": "155px",
                "175px": "175px",
                "188px": "188px",
                "221px": "221px",
                "250px": "250px",
                "256px": "256px",
                "280px": "280px",
                "297px": "297px",
                "299px": "299px",
                "367px": "367px",
                "319px": "319px",
                "344px": "344px",
                "369px": "369px",
                "387px": "387px",
                "424px": "424px",
                "432px": "432px",
                "504px": "504px",
                "523px": "523px",
                "85vh": "85vh",
                "100vh": "100vh",
            },
            minHeight: {
                "300px": "300px",
                "456px": "456px",
            },
            maxWidth: {
                "1110px": "1110px",
                "456px": "456px",
            },
            minWidth: {
                "456px": "456px",
            },
            boxShadow: {
                loginFormCard: "0px 8px 40px rgba(7, 7, 7, 0.08);",
                sortingPopup:
                    "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);",
            },
            colors: {
                tree_poppy: "#F7931E",
                flamingo: "#EF4444",
                catskill_white: "#E2E8F0",
                big_stone: "#171F46",
                fiord: "#475569",
                pickled_bluewood: "#334155",
                geyser: "#CBD5E1",
                catskill_white: "#F1F5F9",
                nile_blue: "#183B56",
                ghost: "#CBD2D9",
                slate_gray: "#64748B",
                mirage: "#1E293B",
                ebony: "#0F172A",
                white: "#FFFFFF",
                mine_shaft: "#333333",
                downriver: "#0A1F44",
                limed_spruce: "#3E4C59",
                selago: "#F9FBFE",
                blue_ribbon: "#0B69FF",
                sun: "#FFA412",
                osloGray: "#7E858E",
            },
            outlineWidth: {
                "0px": "0px",
            },
            backgroundImage: {
                loginDesktopBgImg:
                    "url('https://res.cloudinary.com/degjdup40/image/upload/v1685123256/Rectangle_1456_cj6xdn.png')",
                loginMobileBgImg:
                    "url('https://res.cloudinary.com/degjdup40/image/upload/v1685289882/Rectangle_1457_oea3nq.png')",
                restaurantPosterBGImage:
                    "url(https://res.cloudinary.com/degjdup40/image/upload/v1675658993/Group_7418_rdszvo.png)",
            },
        },
        fontSize: {
            fs36_lh48: [
                "36px",
                {
                    lineHeight: "48px",
                },
            ],
            fs32_lh40: [
                "32px",
                {
                    lineHeight: "40px",
                },
            ],
            fs32_lh48: [
                "32px",
                {
                    lineHeight: "48px",
                },
            ],
            fs24_lh32: [
                "24px",
                {
                    lineHeight: "32px",
                },
            ],
            fs20_lh24: [
                "20px",
                {
                    lineHeight: "24px",
                },
            ],
            fs20_lh32: [
                "20px",
                {
                    lineHeight: "32px",
                },
            ],
            fs16_lh26: ["16px", { lineHeight: "26px" }],
            fs16_lh24: ["16px", { lineHeight: "24px" }],
            fs14_lh24: [
                "14px",
                {
                    lineHeight: "24px",
                },
            ],
            fs14_lh16: [
                "14px",
                {
                    lineHeight: "16px",
                },
            ],
            fs14_lh18: [
                "14px",
                {
                    lineHeight: "18px",
                },
            ],
            fs18_lh24: [
                "18px",
                {
                    lineHeight: "24px",
                },
            ],
            fs12_lh16: [
                "12px",
                {
                    lineHeight: "16px",
                },
            ],
        },
    },
    plugins: [],
};
