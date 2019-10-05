package com.cn.yf.swt.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

//轮播
@Data
@Document(indexName="swt", type="activity")
public class Carousel {

    @Id
    private String id;
    private String menu;
    private String image;

}
