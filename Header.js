import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header({ taste, setTaste, region, setRegion, mrtStation, setMrtStation }) {
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
            <option value="">Choose</option>
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
            <option value="">Choose</option>
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
            <option selected>BR 文湖線</option>
            <option value="BR01 動物園">BR01 動物園</option>
            <option value="BR02 木柵">BR02 木柵</option>
            <option value="BR03 萬芳社區">BR03 萬芳社區</option>
            <option value="BR04 萬芳醫院">BR04 萬芳醫院</option>
            <option value="BR05 辛亥">BR05 辛亥</option>
            <option value="BR06 麟光">BR06 麟光</option>
            <option value="BR07 六張犁">BR07 六張犁</option>
            <option value="BR08 科技大樓">BR08 科技大樓</option>
            <option value="BR09 大安">BR09 大安</option>
            <option value="BR10 忠孝新生">BR10 忠孝新生</option>
            <option value="BR11 松江南京">BR11 松江南京</option>
            <option value="BR12 行天宮">BR12 行天宮</option>
            <option value="BR13 中山國中">BR13 中山國中</option>
            <option value="BR14 民權東路">BR14 民權東路</option>
            <option value="BR15 崁頂">BR15 崁頂</option>
            <option value="BR16 後山埤">BR16 後山埤</option>
            <option value="BR17 中山國小">BR17 中山國小</option>
            <option value="BR18 蘆洲">BR18 蘆洲</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
