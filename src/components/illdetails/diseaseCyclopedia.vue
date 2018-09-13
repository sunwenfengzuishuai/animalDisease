<style scoped>
	.disease-cyclopedia-cont{
		height: auto;
		width: 100%;
	}
	.top-null-cont{
		height: 48px;
	}
	.disease-cyclopedia-mid-cont{
		width: 100%;
	}	
		.ill-show-cont{
			width: 100%;
			display: flex;
		}
		.ill-data-show-cont{
			margin-top: -10px;
			margin-right: 10px;
			margin-left: 10px;
			height: auto;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
		.ill-animal-cont{
			flex-shrink: 0;
			width: 250px;
			height: 250px;
			float: right;
			margin-top: -30px;
		}
		.ill-name-show{
			margin-top: 10px;
			margin-right: 10px;
			margin-left: 10px;
			width: 100%;
			height: 180px;
			display: flex;
			flex-direction: column;
		}
		.data-name-show{
			margin-top: 10px;
			margin-right: 10px;
			margin-left: 0px;
		}
		.ill-name{
				height: 30px;
				line-height: 30px;
				color: #fff;
				font-size: 1.2em;
				display: flex;
			}
			.ill-name span{
				display: block;
			}
			.ill-name span:nth-child(1){
				margin-top: 3px;
				width: 18px;
				height: 24px;
				background-color: #4F9CEE;
			}
			.ill-name span:nth-child(2){
				text-align: center;
				width: 90px;
				flex-shrink: 0;
			}
			.ill-name span:nth-child(3){
				width: 100%;
				height: 1px;
				margin-top: 14px;
				box-sizing: border-box;
				border: solid 1px #ccc;
			}
			.ill-show{
				margin-top: 5px;
				font-size: 1.1em;
				color: #fff;
				line-height: 25px;
			}
			.ill-show span{
				text-indent: 2em;
			}
			.blank-cont{
				width: 100%;
				height: 25px;
			}
</style>

<template>
	<div class="disease-cyclopedia-cont">
		<div class="top-null-cont"></div>
		<div class="disease-cyclopedia-mid-cont">
			<div class="ill-show-cont">
				<div class="ill-name-show">
					<div class="ill-name">
						<span></span>
						<span>非洲猪瘟</span>
						<span></span>
					</div>
					<div class="ill-show">
						<span>非洲猪瘟(African Swine fever，East African Swine fever，ASF)，是一种急性，发热传染性很高的滤过性病毒所引起的猪病，其特征是发病过程短，但死亡率高达100%，临床表现为发热，皮肤发绀，淋巴结，肾，胃肠粘膜明显出血。</span>
					</div>
				</div>
				<div class="ill-animal-cont">
					<detail-animal-ill-map :diseasemapdatas="diseasemapdatas"></detail-animal-ill-map>
				</div>
			</div>
			<div class="ill-data-show-cont">
				<div class="data-name-show">
					<div class="ill-name">
						<span></span>
						<span>病原</span>
						<span></span>
					</div>
					<div class="ill-show">
						<span>
							非洲猪瘟病毒是非洲猪瘟科非洲猪瘟病毒属的重要成员，病毒有些特性类似虹彩病毒科和痘病毒科。病毒粒子的直径为175－215纳米，呈20面体对称，有囊膜。基因组为双股线状DNA，大小170－190kb。在猪体内，非洲猪瘟病毒可在几种类型的细胞浆中，尤其是网状内皮细胞和单核巨噬细胞中复制。该病毒可在钝缘蜱中增殖，并使其成为主要的传播媒介。
						</span>
						<span>
							本病毒能从被感染猪之血液、组织液、内脏，及其他排泄物中证实出来，低温暗室内存在血液中之病毒可生存六年，室温中可活数周，加热被感染病毒的血液55℃30分或60℃10分钟，病毒将被破坏，许多脂溶剂和消毒剂可以将其破坏。
						</span>
					</div>
					<div class="blank-cont"></div>
				</div>
				<div class="data-name-show">
					<div class="ill-name">
						<span></span>
						<span>发病机理</span>
						<span></span>
					</div>
					<div class="ill-show">
						<span>
							ASFV可经过口和上呼吸道系统进入猪体，在鼻咽部或是扁桃体发生感染，病毒迅速蔓延到下颌淋巴结，通过淋巴和血液遍布全身。强毒感染时细胞变化很快，在呈现明显的刺激反应前，细胞都已死亡。弱毒感染时，刺激反应很容易观察到，细胞核变大，普遍发生有丝分裂。发病率通常在40%—85%之间，死亡率因感染的毒株不同而有所差异。高致病性毒株死亡率可高达90—100%；中等致病性毒株在成年动物的死亡率在20%—40%之间，在幼年动物的死亡率在70%—80%之间；低致病性毒株死亡率在10%—30%之间
						</span>
					</div>
					<div class="blank-cont"></div>
				</div>
				<div class="data-name-show">
					<div class="ill-name">
						<span></span>
						<span>症状</span>
						<span></span>
					</div>
					<div class="ill-show">
						<span>
							自然感染潜伏期5～9天，往往更短，临床实验感染则为2～5天，发病时体温升高至41度 ，约持续四天，直到死前四十八小时，体温始下降为其特征，同时临床症状直到体温下降才显示出来，故与猪瘟体温升高时症状出现不同，最初三至四日发热期间，猪只之食欲，显出极度脆弱，猪只躺在舍角，强迫赶起要它走动，则显示出极度累弱，尤其後肢更甚，脉搏动快，咳嗽，呼吸快约三分之一，显呼吸困难，浆液或粘液脓性结膜炎，有些毒株会引起带血之下痢，呕吐，血液变化似猪瘟，从三至五个病例中，显示有50%之白血球数减少现象，淋巴球也同样减少，体温升高时发生白血球性贫血，至第四日白血球数便降至40%才不下降，未成熟中性球数增加也可观察到，往往发热後第七天死亡，或症状出现仅一、二天便死亡。
						</span>
					</div>
					<div class="blank-cont"></div>
				</div>
				<div class="data-name-show">
					<div class="ill-name">
						<span></span>
						<span>临诊诊断</span>
						<span></span>
					</div>
					<div class="ill-show">
						<span>
							非洲猪瘟与猪瘟的其他出血性疾病的症状和病变都很相似，他们的亚急性型和慢性型在生产现场实际上是不能区别的，因而必须用实验室方法才能鉴别。现场如果发现尸体解剖的猪出现脾和淋巴结严重充血，形如血肿，则可怀疑为猪瘟。
						</span>
					</div>
					<div class="blank-cont"></div>
				</div>
				<div class="data-name-show">
					<div class="ill-name">
						<span></span>
						<span>防控</span>
						<span></span>
					</div>
					<div class="ill-show">
						<span>
							在无本病的国家和地区应防止ASFV的传入，在国际机场和港口，从飞机和船舶来的食物废料均应焚毁。对无本病地区事先建立快速诊断方法和制定一旦发生本病时的扑灭计划。
						</span>
						<span>
							由于在世界范围内没有研发出可以有效预防非洲猪瘟的疫苗，但高温、消毒剂可以有效杀灭病毒，所以做好养殖场生物安全防护是防控非洲猪瘟的关键。
						</span>
						<span>
							一是严格控制人员、车辆和易感动物进入养殖场；进出养殖场及其生产区的人员、车辆、物品要严格落实消毒等措施。 
						</span>
						<span>
							二是尽可能封闭饲养生猪，采取隔离防护措施，尽量避免与野猪、钝缘软蜱接触。 
						</span>
						<span>
							三是严禁使用泔水或餐余垃圾饲喂生猪。
						</span>
						<span>
							四是积极配合当地动物疫病预防控制机构开展疫病监测排查，特别是发生猪瘟疫苗免疫失败、不明原因死亡等现象，应及时上报当地兽医部门。
						</span>
					</div>
					<div class="blank-cont"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DetailAnimalIllMap from '../map/detailsanimalillmap.vue'
	export default {
		props: {
			diseasemapdatas: {
				type: Object,
				default: null
			},
		},
		// watch: {
		// 	diseasemapdatas: function(newValue, oldValue){
		// 		// console.log(newValue);
		// 		this.diseasedata = newValue.diseasedata;
		// 		this.diseaselinks = newValue.diseaselinks;
		// 		this.drawLine(this.diseasedata);		
		// 	}
		// },
		data () {
            return {
            	// diseasemapdatas: {},
            }
        },
		mounted(){

		},
		methods: {
			// async queryAnimalByDiseaseid(id){
   //  			var data = await animalrequest.queryAnimalByDiseaseid(id);
   //  			this.diseaselinks = data;
   //  			// this.diseasemapdatas = {diseasedata: [], diseaselinks: []};
   //  			this.diseasemapdatas = this.getdiseasedata();
   //  		},
		},
		components: {
			DetailAnimalIllMap,
		}
	}
</script>