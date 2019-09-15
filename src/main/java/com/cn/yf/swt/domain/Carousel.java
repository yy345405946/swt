package com.cn.yf.swt.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

//轮播
@Data
@Document(indexName="swt", type="activity")
public class Carousel {

    @Id
    private String id;
    private String menu;
    private List<String> images;

}
