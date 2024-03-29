package com.cn.yf.swt.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

@Data
@Document(indexName="swt", type="activity")
public class Teacher {

    @Id
    private int id;
    private String order;
    private String name;
    private String image;
    private String title;
    private String description;
    private List<String> production;
    private String isEnable;

}
