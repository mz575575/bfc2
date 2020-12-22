<template>
    <div>
      <van-nav-bar
        title="新闻咨询"
        left-text="返回"
        
        left-arrow
        @click-left="onClickLeft"       
      />
      

    <van-image   :src="require('../pulic/new.jpg')" width="200" />
    




    <van-cell icon="home-o" value="报废汽车回收详细法规" ></van-cell>
     <h5 style="font-size:12px;color:#aaa;text-align:left;margin:1px 15px;">   发布日期：2020/09/11</h5>
      <div>
        
        
        <div style=""  class="bg">
          <p style="text-align:left;margin-left:8px"> 第一条</p>
        <span class="text_detail" style="display:block">
            为了规范报废汽车回收活动，加强对报废汽车回收的管理，保障道路交通秩序和人民生命财产安全，保护环境，制定本办法。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二条</p>
        <span class="text_detail" style="display:block">
            本办法所称报废汽车(包括摩托车、农用运输车，下同)，是指达到国 家报废标准，或者虽未达到国 家报废标准，但发动机或者底盘严重损坏，经检验不符合国 家机动车运行安全技术条件或者******机动车污染物排放标准的机动车。本办法所称拼装车，是指使用报废汽车发动机、方向机、变速器、前后桥、车架(以下统称"五大总成")以及其他零配件组装的机动车。
        </span>
        <p style="text-align:left;margin-left:8px"> 第三条</p>

        <span class="text_detail" style="display:block">
           负责报废汽车回收监督管理的部门及其工作人员，不依照本办法的规定履行监督管理职责的，发现不再具备条件的报废汽车回收企业不及时撤销有关证照的，发现有本办法规定的违法行为不予查处的，对部门正职负责人、直接负责的主管人员和其他直接责任人员，给予记大过、降级或者撤职的行政处分;构成犯罪的，依法追究刑事责任。
        </span>
        <p style="text-align:left;margin-left:8px"> 第四条</p>

        <span class="text_detail" style="display:block">
            鼓励汽车报废更新，具体办法由******经济贸易委员会会同财政部制定。
        </span>
        <p style="text-align:left;margin-left:8px"> 第五条</p>

        <span class="text_detail" style="display:block">
            县级以上地方各级人民应当加强对报废汽车回收监督管理工作的领导，组织各有关部门依法采取措施，防止并依法查处违反本办法规定的行为。
        </span>
        <p style="text-align:left;margin-left:8px"> 第六条</p>

        <span class="text_detail" style="display:block">
            ******对报废汽车回收业实行特种行业管理，对报废汽车回收企业实行资格******制度。除取得报废汽车回收企业资格******的外，任何单位和个人不得从事报废汽车回收活动。不具备条件取得报废汽车回收企业资格******或者未取得报废汽车回收企业资格******，从事报废汽车回收活动的，任何单位和个人均有权举报。
        </span>
        <p style="text-align:left;margin-left:8px"> 第七条</p>

        <span class="text_detail" style="display:block">
            报废汽车回收企业除应当符合有关法律、行政法规规定的设立企业的条件外，还应当具备下列条件：(一)注册资本不低于50万元人民币，依照税法规定为一般纳税人;(二)拆解场地面积不低于5000平方米;(三)具备必要的拆解设备和消防设施;(四)年回收拆解能力不低于500辆;(五)正式从业人员不少于20人，其中专业技术人员不少于5人;(六)没有出售报废汽车、报废"五大总成"、拼装车等违法经营行为记录;(七)符合******规定的环境保护标准。设立报废汽车回收企业，还应当符合******经济贸易委员会关于报废汽车回收行业******规划、合理布局的要求。
        </span>
        <p style="text-align:left;margin-left:8px"> 第八条</p>

        <span class="text_detail" style="display:block">
            拟从事报废汽车回收业务的，应当向省、自治区、直辖市人民**经济贸易管理部门提出申请。省、自治区、直辖市人民**经济贸易管理部门应当自收到申请之日起30个工作日内，按照本办法第七条规定的条件对申请审核完毕;特殊情况下，可以适当延长，但延长的时间不得超过30个工作日。经审核符合条件的，颁发《资格******书》;不符合条件的，驳回申请并说明理由。申请人取得《资格******书》后，应当依照废旧金属收购业治安管理办法的规定向****申领《特种行业许可证》。申请人持《资格******书》和《特种行业许可证》向工商行政管理部门办理登记手续，领取营业执照后，方可从事报废汽车回收业务。省、自治区、直辖市经济贸易管理部门应当将本行政区域内取得资格******的报废汽车回收企业，报******经济贸易委员会备案，并由******经济贸易委员会予以公布。
        </span>
        <p style="text-align:left;margin-left:8px"> 第九条</p>

        <span class="text_detail" style="display:block">
           经济贸易管理、**、工商行政管理等部门必须严格依照本办法和其他有关法律、行政法规的规定，依据各自的职责对从事报废汽车回收业务的申请进行审查;不符合规定条件的，不得颁发有关证照。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十条</p>

        <span class="text_detail" style="display:block">
            报废汽车拥有单位或者个人应当及时向****办理机动车报废手续。****应当于受理当日，向报废汽车拥有单位或者个人出具《机动车报废证明》，并告知其将报废汽车交售给报废汽车回收企业。任何单位或者个人不得要求报废汽车拥有单位或者个人将报废汽车交售给指定的报废汽车回收企业。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十一条</p>

        <span class="text_detail" style="display:block">
            报废汽车回收企业凭《机动车报废证明》收购报废汽车，并向报废汽车拥有单位或者个人出具《报废汽车回收证明》。报废汽车拥有单位或者个人凭《报废汽车回收证明》，向汽车注册登记地的****办理注销登记。《报废汽车回收证明》样式由******经济贸易委员会规定。任何单位和个人不得买卖或者伪造、变造《报废汽车回收证明》。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十二条</p>

        <span class="text_detail" style="display:block">
            报废汽车拥有单位或者个人应当及时将报废汽车交售给报废汽车回收企业。任何单位或者个人不得将报废汽车出售、赠予或者以其他方式转让给非报废汽车回收企业的单位或者个人;不得自行拆解报废汽车。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十三条</p>

        <span class="text_detail" style="display:block">
            报废汽车回收企业对回收的报废汽车应当逐车登记;发现回收的报废汽车有盗窃、抢劫或者其他犯罪嫌疑的，应当及时向****报告。报废汽车回收企业不得拆解、改装、拼装、倒卖有犯罪嫌疑的汽车及其"五大总成"和其他零配件。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十四条</p>

        <span class="text_detail" style="display:block">
            报废汽车回收企业必须拆解回收的报废汽车;其中，回收的报废营运客车，应当在****的监督下解体。拆解的"五大总成"应当作为废金属，交售给钢铁企业作为冶炼原料;拆解的其他零配件能够继续使用的，可以出售，但必须标明"报废汽车回用件"。报废汽车回收企业拆解报废汽车，应当遵守******环境保护法律、法规，采取有效措施，防治污染。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十五条</p>

        <span class="text_detail" style="display:block">
            禁止任何单位或者个人利用报废汽车"五大总成"以及其他零配件拼装汽车。禁止报废汽车整车、"五大总成"和拼装车进入市场交易或者以其他任何方式交易。禁止拼装车和报废汽车上路行驶。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十六条</p>

        <span class="text_detail" style="display:block">
            县级以上地方人民**经济贸易管理部门依据职责，对报废汽车回收企业实施经常性的监督检查，发现报废汽车回收企业不再具备规定条件的，应当立即告知原审批发证部门撤销《资格******书》、《特种行业许可证》，注销营业执照。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十七条</p>

        <span class="text_detail" style="display:block">
            ****依照本办法以及废旧金属收购业治安管理办法和机动车修理业、报废机动车回收业治安管理办法的规定，对报废汽车回收企业的治安状况实施监督，堵塞销赃渠道。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十八条</p>

        <span class="text_detail" style="display:block">
            工商行政管理部门依据职责，对报废汽车回收企业的经营活动实施监督;对未取得报废汽车回收企业资格******，擅自从事报废汽车回收活动的，应当予以查封、取缔。
        </span>
        <p style="text-align:left;margin-left:8px"> 第十九条</p>

        <span class="text_detail" style="display:block">
            报废汽车的收购价格，按照金属含量折算，参照废旧金属市场价格计价。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二十条</p>

        <span class="text_detail" style="display:block">
            违反本办法第六条的规定，未取得报废汽车回收企业资格******，擅自从事报废汽车回收活动的，由工商行政管理部门没收非法回收的报废汽车、"五大总成"以及其他零配件，送报废汽车回收企业拆解，没收违法所得;违法所得在2万元以上的，并处违法所得2倍以上5倍以下的罚款;违法所得不足2万元或者没有违法所得的，并处2万元以上5万元以下的罚款;属经营单位的，吊销营业执照。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二十一条</p>

        <span class="text_detail" style="display:block">
            违反本办法第十一条的规定，买卖或者伪造、变造《报废汽车回收证明》的，由****没收违法所得，并处1万元以上5万元以下的罚款;属报废汽车回收企业，情节严重的，由原审批发证部门分别吊销《资格******书》、《特种行业许可证》、营业执照。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二十二条</p>

        <span class="text_detail" style="display:block">
            违反本办法第十二条的规定，将报废汽车出售、赠予或者以其他方式转让给非报废汽车回收企业的单位或者个人的，或者自行拆解报废汽车的，由****没收违法所得，并处2000元以上2万元以下的罚款。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二十三条</p>

        <span class="text_detail" style="display:block">
            违反本办法第十三条的规定，报废汽车回收企业明知或者应知是有盗窃、抢劫或者其他犯罪嫌疑的汽车、"五大总成"以及其他零配件，未向****报告，擅自拆解、改装、拼装、倒卖的，由****依法没收汽车、"五大总成"以及其他零配件，处1万元以上5万元以下的罚款;由原审批发证部门分别吊销《资格******书》、《特种行业许可证》、营业执照;构成犯罪的，依法追究刑事责任。 </span>
        <p style="text-align:left;margin-left:8px"> 第二十四条</p>

        <span class="text_detail" style="display:block">
            违反本办法第十四条的规定，出售不能继续使用的报废汽车零配件或者出售的报废汽车零配件未标明"报废汽车回用件"的，由工商行政管理部门没收违法所得，并处2000元以上1万元以下的罚款。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二十五条</p>

        <span class="text_detail" style="display:block">
            违反本办法第十五条的规定，利用报废汽车"五大总成"以及其他零配件拼装汽车或者出售报废汽车整车、"五大总成"、拼装车的，由工商行政管理部门没收报废汽车整车、"五大总成"以及其他零配件、拼装车，没收违法所得;违法所得在5万元以上的，并处违法所得2倍以上5倍以下的罚款;违法所得不足5万元或者没有违法所得的，并处5万元以上10万元以下的罚款;属报废汽车回收企业的，由原审批发证部门分别吊销《资格******书》、《特种行业许可证》、营业执照。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二十六条</p>

        <span class="text_detail" style="display:block">
            违反本办法第十五条的规定，报废汽车上路行驶的，由****收回机动车号牌和机动车行驶证，责令报废汽车拥有单位或者个人依照本办法的规定办理注销登记，可以处2000元以下的罚款;拼装车上路行驶的，由****没收拼装车，送报废汽车回收企业拆解，并处2000元以上5000元以下的罚款。
        </span>
        <p style="text-align:left;margin-left:8px"> 第二十七条</p>

        <span class="text_detail" style="display:block">
            违反本办法第九条的规定，负责报废汽车回收企业审批发证的部门对不符合条件的单位或者个人发给有关证照的，对部门正职负责人、直接负责的主管人员和其他直接责任人员给予降级或者撤职的行政处分;其中，对承办审批的有关工作人员，还应当调离原工作岗位，不得继续从事审批工作;构成犯罪的，依法追究刑事责任。
        </span>
        
        
        
        
       
        
       
       
        </div>
      </div>

     
    </div>
</template>

<script>
export default {
    props: {

    },
    components: {
        
    },
    data() {
        return {

        };
    },
    methods: {
      onClickLeft(){
        this.$router.push("/")
      }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
};
</script>

<style scoped >
.call{
   font-size: 18px;
   font-weight: bolder;
  color:#555b6e;
  margin-bottom:10px;
}
.bg{
    border:1px solid #eee;
    padding:10px 15px ;text-align:left;
    
    color:#fff
}
p{
  font-size:15px;
  font-weight: bolder;
  color:#457b9d;
}
.num{
  font-size: 20px;
  font-weight: bolder;
  color:#fff;
  background-color:#457b9d ;
}
.text_detail{
  font-size: 13px;
  color:#000;
  margin-bottom:10px;
}
</style>
