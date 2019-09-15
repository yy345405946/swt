package com.cn.yf.swt.repository;

import com.cn.yf.swt.domain.Carousel;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarouselRepository extends ElasticsearchRepository<Carousel, String>{
}
