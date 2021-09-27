import newsApi from 'api/newsApi';
import FootBody from 'components/Footer/FootBody/FootBody';
import FootTop from 'components/Footer/FootTop/FootTop';
import React, { useEffect, useState } from 'react';

FooterContainer.propTypes = {};

function FooterContainer(props) {
  const keyList = [
    'Iphone 13',
    'Món ngon mỗi ngày',
    'Tivi Sony',
    ' Thiết bị y tế',
    'Đồ dùng mẹ và bé',
    'Máy lạnh mới 2021',
    'Máy lạnh Electrolux',
    'Tư vấn đồng hồ',
    'Máy giặt Midea',
  ];
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {};
      const news = await newsApi.getAll(params);
      setNews(news);
    };

    fetchProducts();
  }, []);
  return (
    <div style={{ width: '100%', maxWidth: 1200 + 'px', margin: 'auto' }}>
      <FootTop news={news} />
      <FootBody keyList={keyList} />
    </div>
  );
}

export default FooterContainer;
