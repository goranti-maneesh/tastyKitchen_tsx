/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
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
                "18px": "18px",
                "23px": "23px",
                "30px": "30px",
                "40px": "40px",
                "49px": "49px",
                "63px": "63px",
                "415px": "415px",
                "609px": "609px",
            },
            width: {
                "12px": "12px",
                "16px": "16px",
                "24px": "24px",
                "39px": "39px",
                "40px": "40px",
                "48px": "48px",
                "50vw": "50vw",
                "53px": "53px",
                "49px": "49px",
                "73px": "73px",
                "89vw": "89vw",
                "112px": "112px",
                "145px": "145px",
                "160px": "160px",
                "161px": "161px",
                "312px": "312px",
                "350px": "350px",
                "360px": "360px",
                "387px": "387px",
                "456px": "456px",
                "479px": "479px",
                "1110px": "1110px",
            },
            height: {
                "2px": "2px",
                "12px": "12px",
                "16px": "16px",
                "24px": "24px",
                "32px": "32px",
                "38px": "38px",
                "39px": "39px",
                "40px": "40px",
                "43px": "43px",
                "50vh": "50vh",
                "64px": "64px",
                "96px": "96px",
                "100px": "100px",
                "112px": "112px",
                "188px": "188px",
                "250px": "250px",
                "299px": "299px",
                "319px": "319px",
                "369px": "369px",
                "387px": "387px",
                "424px": "424px",
                "432px": "432px",
                "523px": "523px",
            },
            minHeight: {
                "300px": "300px",
                "456px": "456px",
            },
            maxWidth: {
                "1110px": "1110px",
            },
            boxShadow: {
                loginFormCard: "0px 8px 40px rgba(7, 7, 7, 0.08);",
                sortingPopup:
                    "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);",
            },
            colors: {
                Tree_Poppy: "#F7931E",
                Flamingo: "#EF4444",
                Catskill_White: "#E2E8F0",
                Big_Stone: "#171F46",
                Fiord: "#475569",
                Pickled_Bluewood: "#334155",
                Geyser: "#CBD5E1",
                Catskill_White: "#F1F5F9",
                Nile_Blue: "#183B56",
                Ghost: "#CBD2D9",
                Slate_Gray: "#64748B",
                Mirage: "#1E293B",
                Ebony: "#0F172A",
                white: "#FFFFFF",
            },
            outlineWidth: {
                "0px": "0px",
            },
            backgroundImage: {
                loginDesktopBgImg:
                    "url('https://res.cloudinary.com/degjdup40/image/upload/v1685123256/Rectangle_1456_cj6xdn.png')",
                loginMobileBgImg:
                    "url('https://res.cloudinary.com/degjdup40/image/upload/v1685289882/Rectangle_1457_oea3nq.png')",
            },
        },
        fontSize: {
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
            fs16_lh26: ["16px", { lineHeight: "26px" }],
            fs16_lh24: ["16px", { lineHeight: "24px" }],
            fs14_lh24: [
                "14px",
                {
                    lineHeight: "24px",
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
