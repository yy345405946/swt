package com.cn.yf.swt.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

//视频
@Data
@Document(indexName="swt", type="activity")
public class Vedio {

    @Id
    private int id;
    private String assetClass;
    private String teacher;
    private String type;
    private String mark;
    private String url;
    private String hits;
    private String updatedDate;
    private String isEnable;

}
