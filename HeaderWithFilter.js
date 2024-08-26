import React from 'react';
import Modal from 'react-modal';
import logo from '../assets/logo.png';
import './HeaderWithFilter.css';

Modal.setAppElement('#root');

function HeaderWithFilter({ taste, setTaste, region, setRegion, mrtStation, setMrtStation }) {
  const handleTasteChange = (e) => setTaste(e.target.value);
  const handleRegionChange = (e) => setRegion(e.target.value);
  const handleMrtStationChange = (e) => setMrtStation(e.target.value);

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="The Easy Ramen Map Logo" className="logo" />
        <h1>The Easy Ramen Map</h1>
      </div>
      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="taste">Taste:</label>
          <select id="taste" value={taste} onChange={handleTasteChange}>
            <option selected>Choose</option>
            <option value="豚骨拉麵">豚骨拉麵</option>
            <option value="雞白湯拉麵">雞白湯拉麵</option>
            <option value="煮乾/魚介拉麵">煮乾/魚介拉麵</option>
            <option value="牛湯拉麵">牛湯拉麵</option>
            <option value="鴨系拉麵">鴨系拉麵</option>
            <option value="海鮮系拉麵">海鮮系拉麵</option>
            <option value="醬油拉麵">醬油拉麵</option>
            <option value="沾麵">沾麵</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="region">Region:</label>
          <select id="region" value={region} onChange={handleRegionChange}>
            <option selected>Choose</option>
            <option value="台北市中山區">台北市中山區</option>
            <option value="台北市中正區">台北市中正區</option>
            <option value="台北市信義區">台北市信義區</option>
            <option value="台北市內湖區">台北市內湖區</option>
            <option value="台北市士林區">台北市士林區</option>
            <option value="台北市大同區">台北市大同區</option>
            <option value="台北市大安區">台北市大安區</option>
            <option value="台北市松山區">台北市松山區</option>
            <option value="新北市淡水區">新北市淡水區</option>
            <option value="新北市新莊區">新北市新莊區</option>
            <option value="新北市三重區">新北市三重區</option>
            <option value="新北市中和區">新北市中和區</option>
            <option value="新北市永和區">新北市永和區</option>
            <option value="新北市板橋區">新北市板橋區</option>
            <option value="新北市新店區">新北市新店區</option>
            <option value="新北市蘆洲區">新北市蘆洲區</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="mrt">MRT Station:</label>
          <select id="mrt" value={mrtStation} onChange={handleMrtStationChange}>
            <option selected>Choose</option>

            <option value="BR01">BR01 動物園</option>
            <option value="BR02">BR02 木柵</option>
            <option value="BR03">BR03 萬芳社區</option>
            <option value="BR04">BR04 萬芳醫院</option>
            <option value="BR05">BR05 辛亥</option>
            <option value="BR06">BR06 麟光</option>
            <option value="BR07">BR07 六張犁</option>
            <option value="BR08">BR08 科技大樓</option>
            <option value="BR09">BR09 大安</option>
            <option value="BR10">BR10 忠孝復興</option>
            <option value="BR11">BR11 南京復興</option>
            <option value="BR12">BR12 中山國中</option>
            <option value="BR13">BR13 松山機場</option>
            <option value="BR14">BR14 大直</option>
            <option value="BR15">BR15 劍南路</option>
            <option value="BR16">BR16 西湖</option>
            <option value="BR17">BR17 港墘</option>
            <option value="BR18">BR18 文德</option>
            <option value="BR19">BR19 內湖</option>
            <option value="BR20">BR20 大湖公園</option>
            <option value="BR21">BR21 葫洲</option>
            <option value="BR22">BR22 東湖</option>
            <option value="BR23">BR23 南港軟體園區</option>
            <option value="BR24">BR24 南港展覽館</option>
           
            <option value="R02">R02 象山</option>
            <option value="R03">R03 台北101/世貿</option>
            <option value="R04">R04 信義安和</option>
            <option value="R05">R05 大安</option>
            <option value="R06">R06 大安森林公園</option>
            <option value="R07">R07 東門</option>
            <option value="R08">R08 中正紀念堂</option>
            <option value="R09">R09 台大醫院</option>
            <option value="R10">R10 台北車站</option>
            <option value="R11">R11 中山</option>
            <option value="R12">R12 雙連</option>
            <option value="R13">R13 民權西路</option>
            <option value="R14">R14 圓山</option>
            <option value="R15">R15 劍潭</option>
            <option value="R16">R16 士林</option>
            <option value="R17">R17 芝山</option>
            <option value="R18">R18 明德</option>
            <option value="R19">R19 石牌</option>
            <option value="R20">R20 唭哩岸</option>
            <option value="R21">R21 奇岩</option>
            <option value="R22">R22 北投</option>
            <option value="R22A">R22A 新北投</option>
            <option value="R23">R23 復興崗</option>
            <option value="R24">R24 忠義</option>
            <option value="R25">R25 關渡</option>
            <option value="R26">R26 竹圍</option>
            <option value="R27">R27 紅樹林</option>
            <option value="R28">R28 淡水</option>

            <option value="G01">G01 新店</option>
            <option value="G02">G02 新店區公所</option>
            <option value="G03">G03 七張</option>
            <option value="G03A">G03A 小碧潭</option>
            <option value="G04">G04 大坪林</option>
            <option value="G05">G05 景美</option>
            <option value="G06">G06 萬隆</option>
            <option value="G07">G07 公館</option>
            <option value="G08">G08 台電大樓</option>
            <option value="G09">G09 古亭</option>
            <option value="G10">G10 中正紀念堂</option>
            <option value="G11">G11 小南門</option>
            <option value="G12">G12 西門</option>
            <option value="G13">G13 北門</option>
            <option value="G14">G14 中山</option>
            <option value="G15">G15 松江南京</option>
            <option value="G16">G16 南京復興</option>
            <option value="G17">G17 台北小巨蛋</option>
            <option value="G18">G18 南京三民</option>
            <option value="G19">G19 松山</option>

            <option value="O01">O01 南勢角</option>
            <option value="O02">O02 景安</option>
            <option value="O03">O03 永安市場</option>
            <option value="O04">O04 頂溪</option>
            <option value="O05">O05 古亭</option>
            <option value="O06">O06 東門</option>
            <option value="O07">O07 忠孝新生</option>
            <option value="O08">O08 松江南京</option>
            <option value="O09">O09 行天宮</option>
            <option value="O10">O10 中山國小</option>
            <option value="O11">O11 民權西路</option>
            <option value="O12">O12 大橋頭</option>
            <option value="O13">O13 台北橋</option>
            <option value="O14">O14 菜寮</option>
            <option value="O15">O15 三重</option>
            <option value="O16">O16 先嗇宮</option>
            <option value="O17">O17 頭前庄</option>
            <option value="O18">O18 新莊</option>
            <option value="O19">O19 輔大</option>
            <option value="O20">O20 丹鳳</option>
            <option value="O21">O21 迴龍</option>
            <option value="O50">O50 三重國小</option>
            <option value="O51">O51 三和國中</option>
            <option value="O52">O52 徐匯中學</option>
            <option value="O53">O53 三民高中</option>
            <option value="O54">O54 蘆洲</option>

            <option value="BL01">BL01 頂埔</option>
            <option value="BL02">BL02 永寧</option>
            <option value="BL03">BL03 土城</option>
            <option value="BL04">BL04 海山</option>
            <option value="BL05">BL05 亞東醫院</option>
            <option value="BL06">BL06 府中</option>
            <option value="BL07">BL07 板橋</option>
            <option value="BL08">BL08 新埔</option>
            <option value="BL09">BL09 江子翠</option>
            <option value="BL10">BL10 龍山寺</option>
            <option value="BL11">BL11 西門</option>
            <option value="BL12">BL12 台北車站</option>
            <option value="BL13">BL13 善導寺</option>
            <option value="BL14">BL14 忠孝新生</option>
            <option value="BL15">BL15 忠孝復興</option>
            <option value="BL16">BL16 忠孝敦化</option>
            <option value="BL17">BL17 國父紀念館</option>
            <option value="BL18">BL18 市政府</option>
            <option value="BL19">BL19 永春</option>
            <option value="BL20">BL20 後山埤</option>
            <option value="BL21">BL21 昆陽</option>
            <option value="BL22">BL22 南港</option>
            <option value="BL23">BL23 南港展覽館</option>

            <option value="Y07">Y07 大坪林</option>
            <option value="Y08">Y08 十四張</option>
            <option value="Y09">Y09 秀朗橋</option>
            <option value="Y10">Y10 景平</option>
            <option value="Y11">Y11 景安</option>
            <option value="Y12">Y12 中和</option>
            <option value="Y13">Y13 橋和</option>
            <option value="Y14">Y14 中原</option>
            <option value="Y15">Y15 板新</option>
            <option value="Y16">Y16 板橋</option>
            <option value="Y17">Y17 新埔民生</option>
            <option value="Y18">Y18 頭前庄</option>
            <option value="Y19">Y19 幸福</option>
            <option value="Y20">Y20 新北產業園區</option>

          </select>
        </div>
      </div>
    </header>
  );
}

export default HeaderWithFilter;
