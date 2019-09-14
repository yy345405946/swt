package com.cn.yf.swt.domain;

import lombok.Data;

import javax.persistence.Id;

//视频
@Data
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
