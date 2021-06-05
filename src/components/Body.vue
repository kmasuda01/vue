<template>
    <div class="container_body">
        <section class="profile_section" id="profile">
            <div class="inner">
                <h2 class="title">profile</h2>
                <div class="profile_list">
                    <div class="profile_background">
                        <h3 class="profile_keireki">経歴</h3>
                        <ul>
                            <li class="profile_keireki_list">- 九州国際大学附属高等学校(2016年3月) 卒業</li>
                            <li class="profile_keireki_list">- 立命館大学 情報理工学部 情報コミュニケーション学科(2020年3月) 卒業</li>
                            <li class="profile_keireki_list">- (株)NSソリューションズ関西(2020年4月) 入社</li>
                            <li class="profile_keireki_list">- 現在に至る</li>
                        </ul>
                    </div>
                    <div class="profile_coment">
                        <h3 class="profile_msg">ひとこと</h3>
                        <p>職務経歴、やりたいことを書く</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="skill_section" id="skill">
            <div class="inner">
                <h2 class="title">skill</h2>
                <div class="skill_list">
                    <div class="skill_item">
                        <h3 class="skill_one">デザイン</h3>
                        <table class="skill_table">
                            <thead>
                                <tr>
                                    <th>技術</th>
                                    <th>経験年数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>HTML5</th>
                                    <td>1.5年</td>
                                </tr>
                                <tr>
                                    <th>CSS</th>
                                    <td>1.5年</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="skill_item">
                        <h3 class="skill_one">フロントエンド</h3>
                        <table class="skill_table">
                            <thead>
                                <tr>
                                    <th>技術</th>
                                    <th>経験年数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>JavaScript</th>
                                    <td>1年</td>
                                </tr>
                                <tr>
                                    <th>jQuery</th>
                                    <td>1年</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="skill_item">
                        <h3 class="skill_three">バックエンド</h3>
                        <table class="skill_table">
                            <thead>
                                <tr>
                                    <th>技術</th>
                                    <th>経験年数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Java</th>
                                    <td>2年</td>
                                </tr>
                                <tr>
                                    <th>C</th>
                                    <td>1年</td>
                                </tr>
                                <tr>
                                    <th>VB.NET</th>
                                    <td>2年</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="skill_item">
                        <h3 class="skill_four">DB</h3>
                        <table class="skill_table">
                            <thead>
                                <tr>
                                    <th>技術</th>
                                    <th>経験年数</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="skill_item">
                        <h3 class="skill_five">MF</h3>
                        <table class="skill_table">
                            <thead>
                                <tr>
                                    <th>技術</th>
                                    <th>経験年数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>PL1</th>
                                    <td>2年</td>
                                </tr>
                                <tr>
                                    <th>COBOL</th>
                                    <td>2年</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <section class="works_section" id="works">
            <div class="inner">
                <h2 class="title">works</h2>
            </div>
        </section>
    </div>
</template>

<script>
export default{
    data(){
        return {
            title: "Body",
            text: "Have a good day!"
        }
    }
}

</script>

<style scoped>
.profile_section{
    padding: 0 40px;
}
.title{
    text-align: center;
}
.profile_keireki_list{
    list-style: none;
}
.skill_list{
    text-align: center;
}
.skill_table{
    width: 100%;
    text-align: center;
}
.skill_item{
    width: 500px;
    height: 200px;
    margin: auto;
    margin-bottom: 50px;
    background-color: #E3E3E3;
}
th{
    width: 250px;
    height: 30px;
}
</style>
