<template>
    <div class="flex flex-col justify-between items-center">

        <div class="window">
            <div class="top">
                <img src="../assets/tiny_logo.png" alt="">
                <span>Project 0x01 TaiShangVerse | TaiShang 宇宙.exe</span>
            </div>
            <div class="content">
                <div class="events">
                    <div class="events-top">各类活动</div>
                    <div class="events-bottom">
                        <a v-for="item in events" :href='item.link'>
                            <div :key=item.title>{{ item.title }}</div>
                        </a>
                    </div>
                </div>
                <div class="line" style="width: 1018px;"></div>
                <div class="triangle">
                    <span class="triangle-up"></span>
                    <span class="triangle-up"></span>
                    <span class="triangle-up"></span>
                </div>
                <div class="award">
                    <div class="award-left">
                        <div class="window-bar" style="height: 33px;">NFT类</div>
                        <div class="flex flex-col justify-evenly" style="height: calc(100% - 31px);">
                            <a href = "https://github.com/WeLightProject/tai-shang-nft-parser">
                                <div class="flex justify-evenly items-center">
                                    <span class="point"></span>
                                    <span class="award-title" style="width: 266px;">TaiShang DAONFT&NFT Renderer</span>
                                    <div class="flex flex-col">
                                        <span class="award-des">2021万向黑客松二等奖</span>
                                        <span class="award-des">Moonbeam Grant</span>
                                    </div>
                                </div>
                            </a>
                            <div class="line" style="width: 450px;"></div>
                            <a href = "https://github.com/WeLightProject/Tai-Shang-Soul-Card">
                            <div class="flex justify-evenly items-center">
                                <span class="point"></span>
                                <span class="award-title" style="width: 266px;">TaiShang SoulCard</span>
                                <div class="flex flex-col">
                                    <span class="award-des">波卡2022夏季黑客松高校奖</span>
                                    <span class="award-des">ETHShanghai Moonbeam赛道奖</span>
                                </div>
                            </div>
                            </a>
                            <div class="line" style="width: 450px;"></div>
                            <a href="https://github.com/WeLightProject/Tai-Shang-Combiner">
                            <div class="flex justify-evenly items-center">
                                <span class="point"></span>
                                <span class="award-title" style="width: 266px;">TaiShang NFT Combiner</span>
                                <div class="flex flex-col">
                                    <span class="award-des">2022波卡夏季黑客松二等奖</span>
                                </div>
                            </div>
                            </a>
                            <div class="line" style="width: 450px;"></div>
                            <a href="https://github.com/WeLightProject/tai_shang_nft_gallery">
                            <div class="flex justify-evenly items-center">
                                <span class="point"></span>
                                <span class="award-title" style="width: 266px;">TaiShang NFT Gallery</span>
                                <div class="flex flex-col">
                                    <span class="award-des">已正式上线</span>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                    <div class="award-right">
                        <div class="award-right-top">
                            <div class="window-bar flex justify-center items-center" style="height: 38px;">Metaverse 类
                            </div>
                            <a href="https://github.com/WeLightProject/tai_shang_world_generator">
                            <div class="flex justify-evenly items-center" style="height: calc(100% - 38px);">
                                <div class="flex flex-col items-center">
                                    <div class="flex justify-evenly items-center" style="width: 279px;">
                                        <span class="point"></span>
                                        <span class="award-title">TaiShangWorldGenerator</span>
                                    </div>
                                    <div class="award-title" style="font-size: 15px; width: 200px;">Polygon/Venachain</div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="award-des">PolygonCN游戏开发大赛二等奖</span>
                                    <span class="award-des">Polygon Grant</span>
                                    <span class="award-des">2022万向黑客松Venachain赛道一等奖</span>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="award-right-bottom">
                            <div class="window-bar flex justify-center items-center" style="height: 38px;">Education 类
                            </div>
                            <a href="https://github.com/WeLightProject/WeLightBlockchainOS">
                            <div class="flex justify-evenly items-center" style="height: calc(100% - 38px);">
                                <div class="flex justify-evenly items-center" style="width: 279px;">
                                    <span class="point"></span>
                                    <span class="award-title">WeLightBlockchainOS</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="award-des">第四届/第五届</span>
                                    <span class="award-des">中国区块链大赛二等奖</span>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="content-bottom flex flex-col justify-center items-center">
                    <a href="https://github.com/WeLightProject/tai_shang_micro_faas_system">
                    <span>Faas 系统</span>
                    <span>(Arweave)</span>
                    </a>
                </div>
            </div>
        </div>
        <img class="series-bottom" src="../assets/series_bottom.png" alt="series bottom">
    </div>
</template>

<script setup>
import { ref } from 'vue'

const events = ref([
  {
    title: 'Online Camp',
    link: 'https://github.com/WeLightProject/Web3-dApp-Camp/discussions',
  },
  {
    title: 'Offline Workshop',
    link: 'https://github.com/WeLightProject/Web3-dApp-Camp/discussions/categories/workshop'
  },
  {
    title: '悬赏任务',
    link: 'https://dao.noncegeek.com',
  },
  {
    title: 'TaiShangVerse 解谜（规划中）',
  },
  {
    title: '反共识实验室',
    link: 'https://github.com/WeLightProject/AntiConsensusLab',
  },
])

</script>

<style scoped>
.window {
    width: 1120px;
    height: 694px;
    background-color: #E7E7E7;
    margin: 115px auto 0;
}

.top {
    width: 1108px;
    height: 49px;
    background-color: #71B6C6;
    margin: 6px;
    display: flex;
    align-items: center;
}

.top>img {
    width: 18.84px;
    height: 37.69px;
    margin-left: 15px;
    margin-right: 26px;
}

.top>span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #02083C;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.content {
    width: 1108px;
    height: 627px;
    background-color: #E7E7E7;
    margin: 0 auto;
    border: 1px solid black;
}

.events {
    max-width: 100%;
    height: 158px;
    margin: 35px 44px 11px 46px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
}

.events-top {
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 30px;
    color: #02083C;
    width: 100%;
    height: 31px;
    text-align: center;
    background: #D5D5D5;
    box-shadow: inset 1px 1px 0px #FFFFFF, inset -2px -2px 1px rgba(0, 0, 0, 0.8), inset 2px 2px 1px rgba(255, 255, 255, 0.8);
}

.events-bottom {
    width: 100%;
    height: calc(100% - 31px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.events-bottom>a>div {
    width: 156px;
    height: 80px;
    box-shadow: inset 1px 1px 0px #FFFFFF, inset -2px -2px 1px rgba(0, 0, 0, 0.8), inset 2px 2px 1px rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 30px;
    color: #02083C;
    padding-left: 10px;
    padding-right: 10px;
}

.triangle {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 9px;
    margin-bottom: 9px;
}

.triangle-up {
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #02083C;
}

.award {
    margin-left: 45px;
    margin-right: 44px;
    display: flex;
    justify-content: space-between;
}

.award-left {
    width: 50%;
    height: 275px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
}

.window-bar {
    width: 100%;
    background-color: #02083C;
    box-shadow: inset -1px -1px 1px rgba(0, 0, 0, 0.8), inset 1px 1px 1px rgba(255, 255, 255, 0.8);
    color: white;
    text-align: center;
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 30px;
}

.award-title {
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 700;
    font-size: 10 px;
    line-height: 30 px;
    color: #02083C;
}

.award-des {
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #02083C;
    width: 220px;
}

.award-right-top {
    width: 495px;
    height: 129px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
}

.award-right-bottom {
    width: 495px;
    height: 129px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    margin-top: 15px;
}

.content-bottom {
    width: 1019px;
    height: 71px;
    background-color: #02083C;
    margin: 19px auto 0;
    box-shadow: inset -1px -1px 1px rgba(0, 0, 0, 0.8), inset 1px 1px 1px rgba(255, 255, 255, 0.8);
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #FFFFFF;
}

.series-bottom {
    width: 1117px;
    height: 46px;
    margin-top: 100px;
}
</style>