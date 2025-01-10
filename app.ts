import { Application, Router } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import { CORS } from "https://deno.land/x/oak_cors@v0.1.1/mod.ts";
import { brotli } from "https://deno.land/x/oak_compress@v0.0.2/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "Helo sample"
})

router.get("/api/customer-info/:id", (ctx) => {
    if (!ctx.params?.id) {
        return ctx.response.body = {
            "status": false,
            "message": "Tidak ada data"
        }
    }

    ctx.response.body = {
        "status": true,
        "response": {
            "date": new Date('2025-01-09T23:59:59'),
            "code": "SAMPLE_DEMO_1234567890",
            "price": 132000,
            "patients": {
                "name": "Zaki Ibrahim",
                "phone": "+62783737373",
                "address": "Jl. Iskandarsyah II Jakarta Selatan 10120"
            },
            "items": [
                {
                    "id": 1,
                    "name": "Pembayaran Invoice",
                    "price": 132000
                }
            ],
            "total": 132000
        }
    }
})

router.get("/api/payment-methods", (ctx) => {
    ctx.response.type = "application/json";
    ctx.response.body = {
        "datas": [
            {
                "id": "677dfbceaa64bfd1b10dceae",
                "category": "credit-card",
                "display": "Credit Card",
                "order": 1,
                "providers": [
                    {
                        "id": "677dfbceaa64bfd1b10dceaf",
                        "bank_name": "",
                        "channel": "CREDIT_CARD",
                        "code": "CreditCard",
                        "client_url": "/credit-card",
                        "image": "/img/visa.png",
                        "name": "Credit Card",
                        "order": 1
                    }
                ]
            },
            {
                "id": "677b9abf9d8fdc6933523cbb",
                "category": "virtual-account",
                "display": "Virtual Account",
                "order": 1,
                "providers": [
                    {
                        "id": "677b9abf9d8fdc6933523cbc",
                        "bank_name": "PT. BANK CIMB NIAGA, TBK",
                        "channel": "VIRTUAL_ACCOUNT_BANK_CIMB",
                        "code": "CIMB",
                        "client_url": "/virtual-account/cimb",
                        "image": "/img/cimb.png",
                        "name": "Bank CIMB Niaga",
                        "order": 1
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cbd",
                        "bank_name": "PT. BANK SYARIAH INDONESIA, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BSI",
                        "code": "BSI",
                        "client_url": "/virtual-account/bsi",
                        "image": "/img/cimb.png",
                        "name": "Bank Syariah Indonesia",
                        "order": 2
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cbe",
                        "bank_name": "PT. BANK CENTRAL ASIA, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BCA",
                        "code": "BCA",
                        "client_url": "/virtual-account/bca",
                        "image": "/img/bca.png",
                        "name": "Bank Central Asia (BCA)",
                        "order": 3
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cbf",
                        "bank_name": "PT. BANK NEGARA INDONESIA, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BNI",
                        "code": "BNI",
                        "client_url": "/virtual-account/bni",
                        "image": "/img/bni.png",
                        "name": "Bank Negara Indonesia (BNI)",
                        "order": 4
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cc0",
                        "bank_name": "PT. BANK MANDIRI, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BANK_MANDIRI",
                        "code": "MANDIRI",
                        "client_url": "/virtual-account/mandiri",
                        "image": "/img/mandiri.png",
                        "name": "Bank Mandiri",
                        "order": 5
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cc1",
                        "bank_name": "PT. BANK RAKYAT INDONESIA, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BRI",
                        "code": "BRI",
                        "client_url": "/virtual-account/bri",
                        "image": "/img/bri.png",
                        "name": "Bank Rakyat Indonesia (BRI)",
                        "order": 6
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cc2",
                        "bank_name": "PT. BANK TABUNGAN NEGARA, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BTN",
                        "code": "BTN",
                        "client_url": "/virtual-account/btn",
                        "image": "/img/btn.png",
                        "name": "Bank Tabungan Negara (BTN)",
                        "order": 7
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cc3",
                        "bank_name": "PT. BANK PERMATA, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BANK_PERMATA",
                        "code": "PERMATA",
                        "client_url": "/virtual-account/permata",
                        "image": "/img/permata.png",
                        "name": "Bank Permata",
                        "order": 8
                    },
                    {
                        "id": "677b9abf9d8fdc6933523cc4",
                        "bank_name": "PT. BANK DANAMON INDONESIA, TBK.",
                        "channel": "VIRTUAL_ACCOUNT_BANK_DANAMON",
                        "code": "DANAMON",
                        "client_url": "/virtual-account/danamond",
                        "image": "/img/danamon.png",
                        "name": "Bank Danamon",
                        "order": 9
                    }
                ]
            },
            {
                "id": "677dfbceaa64bfd1b10dceba",
                "category": "conventional-store",
                "display": "Conventional Store",
                "order": 1,
                "providers": [
                    {
                        "id": "677dfbceaa64bfd1b10dceb9",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "AlfaGroup",
                        "client_url": "/conventional-store/alvamart",
                        "image": "/img/alfamart.png",
                        "name": "Alfa Mart Group",
                        "order": 1
                    },
                    {
                        "id": "677dfbceaa64bfd1b10dceb8",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "Indomaret",
                        "client_url": "/conventional-store/indomaret",
                        "image": "/img/indomaret.png",
                        "name": "Indomaret",
                        "order": 1
                    }
                ]
            },
            {
                "id": "677dfbceaa64bfd1b10dcebb",
                "category": "paylater",
                "display": "Paylater",
                "order": 1,
                "providers": [
                    {
                        "id": "677dfbceaa64bfd1b10dceb7",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "AlfaGroup",
                        "client_url": "/paylater/indodana",
                        "image": "/img/indodana.png",
                        "name": "Indodana",
                        "order": 1
                    },
                    {
                        "id": "677dfbceaa64bfd1b10dceb6",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "Indomaret",
                        "client_url": "/paylater/akulaku",
                        "image": "/img/akulaku.png",
                        "name": "Akulaku",
                        "order": 1
                    }
                ]
            },
            {
                "id": "677dfbceaa64bfd1b10dcebc",
                "category": "e-wallet",
                "display": "e-Wallet",
                "order": 1,
                "providers": [
                    {
                        "id": "677dfbceaa64bfd1b10dceb5",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "AlfaGroup",
                        "client_url": "/test",
                        "image": "/img/DANA.png",
                        "name": "DANA",
                        "order": 1
                    },
                    {
                        "id": "677dfbceaa64bfd1b10dceb4",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "Indomaret",
                        "client_url": "/test",
                        "image": "/img/OVO.png",
                        "name": "OVO",
                        "order": 1
                    },
                    {
                        "id": "677dfbceaa64bfd1b10dceb3",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "Indomaret",
                        "client_url": "/test",
                        "image": "/img/ShopeePay.png",
                        "name": "ShopeePay",
                        "order": 1
                    },
                    {
                        "id": "677dfbceaa64bfd1b10dceb2",
                        "bank_name": "",
                        "channel": "ONLINE_TO_OFFLINE_AFA",
                        "code": "Indomaret",
                        "client_url": "/test",
                        "image": "/img/Linkaja.png",
                        "name": "Link Aja",
                        "order": 1
                    }
                ]
            }
        ],
        "pagination": {
            "total": 5
        }
    };
});

const app = new Application();

app.use(brotli());
app.use(CORS());

// Logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(staticFiles("public"));

app.listen({ port: 8080 });