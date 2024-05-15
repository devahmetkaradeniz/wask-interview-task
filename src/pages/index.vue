<script setup lang="ts">
const { data } = await useApiFetch<IAccountResponse>('myaccounts', { lazy: true })

const account = ref<IAccount | null>(data.value?.accounts[0])

const metric = ref<string | null>('clicks')

const setAccount = (item: IAccount) => {
    account.value = item
}

const setMetric = (type: string) => {
    metric.value = type
}

const graphicData = computed(() => {
    return account.value.insights.data.map((item: any) => parseFloat(item[`${metric.value}`]))
})
</script>

<template>
    <div class="wrapper">
        <div class="integrationWrapper left">
            <div class="integrations">
                <div class="integration">
                    <IconsFacebook></IconsFacebook>
                </div>
                <div class="integration">
                    <IconsYoutube></IconsYoutube>
                </div>
                <div class="integration">
                    <IconsInstagram></IconsInstagram>
                </div>
                <div class="integration">
                    <IconsShopify></IconsShopify>
                </div>
                <div class="integration">
                    <IconsSnapchat></IconsSnapchat>
                </div>
                <div class="integration">
                    <IconsPixel></IconsPixel>
                </div>
                <div class="integration">
                    <IconsMailchimp></IconsMailchimp>
                </div>
                <div class="integration">
                    <IconsTwitter></IconsTwitter>
                </div>
                <div class="integration">
                    <IconsTiktok></IconsTiktok>
                </div>
                <div class="integration">
                    <IconsWhatsapp></IconsWhatsapp>
                </div>
                <div class="integration">
                    <IconsGoogle></IconsGoogle>
                </div>
                <div class="integration">
                    <IconsAnalytics></IconsAnalytics>
                </div>
                <div class="integration">
                    <IconsWordpress></IconsWordpress>
                </div>
                <div class="integration">
                    <IconsLinkedin></IconsLinkedin>
                </div>
                <div class="integration">
                    <IconsWoocommerce></IconsWoocommerce>
                </div>
                <div class="integration">
                    <IconsYandex></IconsYandex>
                </div>
            </div>
        </div>
        <div class="mainWrapper">
            <div class="contentWrapper">
                <div class="title">Marketing Integrations</div>
                <div class="subTitle">Trust WASK's smart optimization features</div>
            </div>

            <div class="accountWrapper">
                <div class="selectAccount">
                    <div class="selectText">
                        Select Ad Account
                        <IconsArrowRight></IconsArrowRight>
                    </div>
                    <div class="accounts">
                        <div @click="setAccount(item)" v-for="item, index in data.accounts" :key="item.id" class="account"
                            :class="{ 'active': item.id === account?.id }">{{ item.name }}</div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="selectMetric">
                    <div class="selectText">
                        Select Metric
                        <IconsArrowRight></IconsArrowRight>
                    </div>
                    <div class="metrics">
                        <div @click="setMetric('clicks')" class="metric" :class="{ 'active': metric === 'clicks' }">Click
                        </div>
                        <div @click="setMetric('impressions')" class="metric"
                            :class="{ 'active': metric === 'impressions' }">
                            Impressions</div>
                        <div @click="setMetric('spend')" class="metric" :class="{ 'active': metric === 'spend' }">Spend
                        </div>
                    </div>
                </div>
            </div>

            <div class="graphicWrapper">
                <div class="graphic">
                    <div class="title">GRAFİK ALANI</div>
                    <div class="chart">
                        <Graphic :data="graphicData"></Graphic>
                    </div>
                </div>
            </div>
        </div>
        <div class="integrationWrapper right">
            <div class="integrations">
                <div class="integration">
                    <IconsFacebook></IconsFacebook>
                </div>
                <div class="integration">
                    <IconsYoutube></IconsYoutube>
                </div>
                <div class="integration">
                    <IconsInstagram></IconsInstagram>
                </div>
                <div class="integration">
                    <IconsShopify></IconsShopify>
                </div>
                <div class="integration">
                    <IconsSnapchat></IconsSnapchat>
                </div>
                <div class="integration">
                    <IconsPixel></IconsPixel>
                </div>
                <div class="integration">
                    <IconsMailchimp></IconsMailchimp>
                </div>
                <div class="integration">
                    <IconsTwitter></IconsTwitter>
                </div>
                <div class="integration">
                    <IconsTiktok></IconsTiktok>
                </div>
                <div class="integration">
                    <IconsWhatsapp></IconsWhatsapp>
                </div>
                <div class="integration">
                    <IconsGoogle></IconsGoogle>
                </div>
                <div class="integration">
                    <IconsAnalytics></IconsAnalytics>
                </div>
                <div class="integration">
                    <IconsWordpress></IconsWordpress>
                </div>
                <div class="integration">
                    <IconsLinkedin></IconsLinkedin>
                </div>
                <div class="integration">
                    <IconsWoocommerce></IconsWoocommerce>
                </div>
                <div class="integration">
                    <IconsYandex></IconsYandex>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    @apply desktop:flex desktop:justify-between desktop:px-[90px];

    .integrationWrapper {
        @apply desktop:h-[891px] overflow-hidden desktop:mt-[282px];

        .integrations {
            @apply flex desktop:grid gap-[27px] tablet:gap-[48px];
        }

        .integration {
            @apply w-[75.03px] tablet:w-[133.39px] h-[74.62px] tablet:h-[132.66px] bg-[#F9FAFB] flex items-center justify-center rounded-[6.75px] tablet:rounded-[12px];

            svg {
                @apply w-[30.38px] tablet:w-[54px] h-[30.38px] tablet:h-[54px];
            }
        }

        &.left {
            @apply hidden desktop:block after:content-[] desktop:after:content-[''];

            .integrations {
                @apply desktop:mt-[-1951px];
            }
        }

        &.right {
            @apply before:content-[] desktop:before:content-[''] ml-[34px] mt-[25px] tablet:mt-[59px] mb-[32.38px] tablet:mb-[61.34px] desktop:mt-[282px];

            .integrations {
                @apply w-[1605.53px] tablet:w-[2854.27px] desktop:w-full;
            }
        }
    }

    .mainWrapper {
        @apply mt-[38px] tablet:mt-[66px] desktop:mt-[196px] desktop:flex-1 desktop:px-[58px];

        .contentWrapper {
            @apply grid gap-[12px] tablet:gap-[24px] px-[9px] tablet:px-[99px] desktop:px-0 text-[24px] tablet:text-[48px] leading-[30px] tablet:leading-[60px] font-semibold tracking-tighter text-center;

            .title {
                @apply text-[#131313];
            }

            .subTitle {
                @apply text-[#D0D5DD];
            }
        }

        .selectText {
            @apply flex items-center text-[#131313] gap-[14.4px] tablet:gap-[16px] text-[14.4px] tablet:text-[16px] leading-[34.2px] tablet:leading-[38px] font-semibold text-left;
        }

        .accountWrapper {
            @apply grid desktop:flex gap-[32px] tablet:gap-[56px] desktop:gap-[36px] ml-[33px] tablet:ml-[50px] desktop:mx-[25px] mt-[31px] tablet:mt-[71px] desktop:mt-[100px] overflow-hidden;

            .selectAccount {
                @apply flex w-[942.8px] tablet:w-[1047px] desktop:w-auto desktop:ml-[32px] gap-[28.8px] tablet:gap-[32px] items-center;

                .accounts {
                    @apply flex gap-[21.6px] tablet:gap-[24px];

                    .account {
                        @apply bg-[#F9FAFB] text-[#D0D5DD] rounded-[180px] tablet:rounded-[200px] py-[7.2px] tablet:py-[8px] px-[18px] tablet:px-[20px] text-[14.4px] tablet:text-[16px] leading-[34.2px] font-medium cursor-pointer;

                        &.active {
                            @apply bg-[#131313] text-white;
                        }
                    }
                }
            }

            .divider {
                @apply border border-r-[1.5px] border-[#D0D5DD] hidden desktop:block;
            }

            .selectMetric {
                @apply flex w-[942.8px] tablet:w-[1047px] desktop:w-auto gap-[28.8px] tablet:gap-[32px] items-center;

                .metrics {
                    @apply flex gap-[21.6px] tablet:gap-[24px];

                    .metric {
                        @apply bg-[#F9FAFB] text-[#D0D5DD] rounded-[180px] tablet:rounded-[200px] py-[7.2px] tablet:py-[8px] px-[18px] tablet:px-[20px] text-[14.4px] tablet:text-[16px] leading-[34.2px] font-medium cursor-pointer;

                        &.active {
                            @apply bg-[#131313] text-white;
                        }
                    }
                }
            }
        }

        .graphicWrapper {
            @apply bg-[#F9FAFB] mt-[46.2px] tablet:mt-[71px] desktop:mt-[70px] mx-[33px] tablet:mx-[34px] desktop:mx-[25px] rounded-[4.5px] tablet:rounded-[9px] desktop:rounded-[12px] h-[452px] tablet:h-[537px] desktop:h-[573px] px-[16px] tablet:px-[29px] desktop:px-[39px] py-[14px] tablet:py-[28px] desktop:py-[37px];

            .graphic {
                @apply bg-[#FFF5F5] h-full;

                .title {
                    @apply text-[#FFDEDE] text-[36px] tablet:text-[72px] font-bold text-center pt-[18.75px] tablet:pt-[37.5px] leading-[43.57px] tablet:leading-[87.14px];
                }
            }
        }
    }
}

.integrationWrapper.left .integrations {
    animation-name: animate-left;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

.integrationWrapper.right .integrations {
    animation-name: animate-right;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

@media screen and (max-width: 1920px) {
    .integrations {
        animation: none !important;
    }
}

.integrationWrapper.left::after {
    content: '';
    position: absolute;
    width: 133px;
    height: 132px;
    bottom: 146px;
    background: linear-gradient(360deg, #FFFFFF 45.83%, rgba(255, 255, 255, 0) 100%);
}

.integrationWrapper.right::before {
    content: '';
    position: absolute;
    width: 133px;
    height: 132px;
    background: linear-gradient(180deg, #FFFFFF 45.83%, rgba(255, 255, 255, 0) 100%);
}

@keyframes animate-left {
    100% {
        margin-top: 0px;
    }
}

@keyframes animate-right {
    100% {
        margin-top: -1951px;
    }
}
</style>