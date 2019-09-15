package com.cn.yf.swt.service;

import com.cn.yf.swt.domain.Carousel;
import com.cn.yf.swt.repository.CarouselRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.stereotype.Service;

@Service
public class CarouselService {

    @Autowired
    private CarouselRepository carouselRepository;

    public long count(){
        return carouselRepository.count();
    }

    public Iterable<Carousel> findAll(){
        return carouselRepository.findAll();
    }

    public Carousel save(Carousel carousel){
        return carouselRepository.save(carousel);
    }

    public void delete(Carousel carousel){
        carouselRepository.delete(carousel);
    }

    public Page<Carousel> pageQuery(Integer pageNo, Integer pageSize){
        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                //.withQuery(QueryBuilders.matchPhraseQuery("",""))
                .withPageable(PageRequest.of(pageNo, pageSize))
                .build();
        return carouselRepository.search(searchQuery);
    }

}
