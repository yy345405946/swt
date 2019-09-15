package com.cn.yf.swt.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

//课程
@Data
@Document(indexName="swt", type="activity")
public class AssetClass {

    @Id
    private String id;
    private String order;
    private String icon;
    private String description;
    private String assetClass;
    private String subAssetClassList;
    private List<AssetClassDetails> assetClassDetailsList;
    private List<AssetClassProblem> assetClassProblemList;
    private String isEnable;

}
