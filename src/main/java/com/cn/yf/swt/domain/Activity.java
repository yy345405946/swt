package com.cn.yf.swt.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.io.Serializable;

@Data
@Document(indexName="swt", type="activity")
public class Activity implements Serializable {

    @Id
    private String id;
    private String title;
    private String description;
    private String type;
    private String content;
    private String activityDate;
    private String updatedDate;
    private String isEnable;

}
