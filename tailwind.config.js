/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                "18px": "18px",
            },
            width: {
                "50vw": "50vw",
                "53px": "53px",
                "49px": "49px",
                "73px": "73px",
                "89vw": "89vw",
                "312px": "312px",
                "360px": "360px",
                "387px": "387px",
                "456px": "456px",
                "1110px": "1110px",
            },
            height: {
                "32px": "32px",
                "39px": "39px",
                "40px": "40px",
                "43px": "43px",
                "50vh": "50vh",
                "96px": "96px",
                "387px": "387px",
                "523px": "523px",
            },
            minHeight: {
                "456px": "456px",
            },
            maxWidth: {
                "1110px": "1110px"
            },
            boxShadow: {
                loginFormCard: "0px 8px 40px rgba(7, 7, 7, 0.08);",
            },
            colors: {
                Tree_Poppy: "#F7931E",
                Flamingo: "#EF4444",
                Catskill_White: "#E2E8F0",
                Big_Stone: "#171F46",
                Fiord: "#475569",
                Pickled_Bluewood: "#334155",
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
            fs24_lh32: [
                "24px",
                {
                    lineHeight: "32px",
                },
            ],
            fs16_lh26: ["16px", { lineHeight: "26px" }],
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
