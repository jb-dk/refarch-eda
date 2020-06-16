(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"iJ+F":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=i("AnchorLinks"),s=i("AnchorLink"),p={_frontmatter:c},b=o.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,r({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(s,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(s,{mdxType:"AnchorLink"},"Scenario prereqs"),Object(n.b)(s,{mdxType:"AnchorLink"},"Kafka Connect Cluster"),Object(n.b)(s,{mdxType:"AnchorLink"},"Kafka to S3 Sink Connector"),Object(n.b)(s,{mdxType:"AnchorLink"},"S3 to Kafka Source Connector"),Object(n.b)(s,{mdxType:"AnchorLink"},"Next steps"),Object(n.b)(s,{mdxType:"AnchorLink"},"References")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"This scenario walkthrough will cover the usage of ",Object(n.b)("a",r({parentName:"p"},{href:"https://ibm.github.io/event-streams/about/overview/"}),"IBM Event Streams")," as a Kafka provider and ",Object(n.b)("a",r({parentName:"p"},{href:"https://aws.amazon.com/s3/"}),"Amazon S3")," as an object storage service as systems to integrate with the ",Object(n.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/kafka/connect/"}),"Kafka Connect framework"),". Through the use of the ",Object(n.b)("a",r({parentName:"p"},{href:"https://camel.apache.org/"}),"Apache Camel opensource project"),", we are able to use the ",Object(n.b)("a",r({parentName:"p"},{href:"https://camel.apache.org/camel-kafka-connector/latest/index.html"}),"Apache Camel Kafka Connector")," in both a source and a sink capacity to provide bidirectional communication between ",Object(n.b)("a",r({parentName:"p"},{href:"https://ibm.github.io/event-streams/about/overview/"}),"IBM Event Streams")," and ",Object(n.b)("a",r({parentName:"p"},{href:"https://aws.amazon.com/s3/"}),"AWS S3"),"."),Object(n.b)("img",{src:"https://github.com/ibm-cloud-architecture/refarch-eda/raw/master/docs-archive/kafka/images/eventstreams-to-s3-connector-flow.png",alt:"IBM Event Streams to S3 integration via Kafka Connect"}),Object(n.b)("p",null,"As different use cases will require different configuration details to accommodate different situational requirements, the Kafka to S3 Source and Sink capabilities described here can be used to move data between S3 buckets with a Kafka topic being the middle-man or move data between Kafka topics with an S3 Bucket being the middle-man. However, take care to ensure that you do not create an infinite processing loop by writing to the same Kafka topics and the same S3 buckets with both a Source and Sink connector deployed at the same time."),Object(n.b)("h2",null,"Scenario prereqs"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"OpenShift Container Platform")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"This deployment scenario was developed for use on the OpenShift Container Platform, with a minimum version of ",Object(n.b)("inlineCode",{parentName:"li"},"4.2"),".")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Strimzi")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"This deployment scenario will make use of the ",Object(n.b)("a",r({parentName:"li"},{href:"https://strimzi.io/docs/0.17.0/"}),"Strimzi Operator")," for Kafka deployments and the custom resources it manages."),Object(n.b)("li",{parentName:"ul"},"A minimum version of ",Object(n.b)("inlineCode",{parentName:"li"},"0.17.0")," is required for this scenario. This scenario has been explicitly validated with version ",Object(n.b)("inlineCode",{parentName:"li"},"0.17.0"),"."),Object(n.b)("li",{parentName:"ul"},"The simplest scenario is to deploy the Strimzi Operator to ",Object(n.b)("a",r({parentName:"li"},{href:"https://strimzi.io/docs/0.17.0/#deploying-cluster-operator-to-watch-whole-cluster-deploying-co"}),"watch all namespaces")," for relevant custom resource creation and management."),Object(n.b)("li",{parentName:"ul"},"This can be done in the OpenShift console via the ",Object(n.b)("strong",{parentName:"li"},"Operators > Operator Hub")," page.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Amazon Web Services account")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"As this scenario will make use of ",Object(n.b)("a",r({parentName:"p"},{href:"https://aws.amazon.com/s3/"}),"AWS S3"),", an active Amazon Web Services account is required.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using the configuration described in this walkthrough, an additional IAM user can be created for further separation of permission, roles, and responsibilities.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This new IAM user should contain:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",r({parentName:"li"},{href:"https://console.aws.amazon.com/iam/home?region=us-east-1#/policies/arn:aws:iam::aws:policy/AmazonS3FullAccess$serviceLevelSummary"}),Object(n.b)("inlineCode",{parentName:"a"},"AmazonS3FullAccess")," policy")," attached to it ",Object(n.b)("em",{parentName:"li"},"(as it will need both read and write access to S3)"),","),Object(n.b)("li",{parentName:"ul"},"An ",Object(n.b)("a",r({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html"}),"S3 Bucket Policy")," set on the Bucket to allow the IAM user to perform CRUD actions on the bucket and its objects."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a file named ",Object(n.b)("inlineCode",{parentName:"p"},"aws-credentials.properties")," with the following format:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"aws_access_key_id=AKIA123456EXAMPLE\naws_secret_access_key=strWrz/bb8%c3po/r2d2EXAMPLEKEY\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a Kubernetes Secret from this file to inject into the Kafka Connect cluster at runtime:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic aws-credentials --from-file=aws-credentials.properties\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("em",{parentName:"p"},"Additional work is underway to enable configuration of the components to make use of IAM Roles instead.")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IBM Event Streams API Key")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This scenario is written with ",Object(n.b)("a",r({parentName:"p"},{href:"https://ibm.github.io/event-streams/about/overview/"}),"IBM Event Streams")," as the provider of the Kafka endpoints.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"API Keys are required for connectivity to the Kafka brokers and interaction with Kafka topics.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"An API key should be created with (at minimum) read and write access to the source and target Kafka topics the connectors will interact with.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A Kubernetes Secret must be created with the Event Streams API to inject into the Kafka Connect cluster at runtime:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic eventstreams-apikey --from-literal=password=<eventstreams_api_key>\n")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IBM Event Streams Certificates (IBM Cloud Pak for Integration deployments only)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If you are using an IBM Event Streams instance deployed via the IBM Cloud Pak for Integration, you must also download the generated truststore file to provide TLS communication between the connectors and the Kafka brokers.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This file, along with its password, can be found on the ",Object(n.b)("strong",{parentName:"p"},"Connect to this cluster")," dialog in the Event Streams UI.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Once downloaded, it must be configured to work with the Kafka Connect certificate deployment pattern:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"keytool -importkeystore -srckeystore es-cert.jks -destkeystore es-cert.p12 -deststoretype PKCS12\nopenssl pkcs12 -in es-cert.p12 -nokeys -out es-cert.crt\nkubectl create secret generic eventstreams-truststore-cert --from-file=es-cert.crt\n")))),Object(n.b)("h2",null,"Kafka Connect Cluster"),Object(n.b)("p",null,"We will take advantage of some of the developer experience improvements that OpenShift and the Strimi Operator brings to the Kafka Connect framework. The Strimzi Operator provides a ",Object(n.b)("inlineCode",{parentName:"p"},"KafkaConnect")," custom resource which will manage a Kafka Connect cluster for us with minimal system interaction. The only work we need to do is to update the container image that the Kafka Connect deployment will use with the necessary Camel Kafka Connector binaries, which OpenShift can help us with through the use of its Build capabilities."),Object(n.b)("h4",null,"(Optional) Create ConfigMap for log4j configuration"),Object(n.b)("p",null,"Due to the robust nature of Apache Camel, the default logging settings for the Apache Kafka Connect classes will send potentially sensitive information to the logs during Apache Camel context configuration. To avoid this, we can provide an updated logging configuration to the ",Object(n.b)("inlineCode",{parentName:"p"},"log4j")," configuration that is used by our deployments."),Object(n.b)("p",null,"Save the properties file below and name it ",Object(n.b)("inlineCode",{parentName:"p"},"log4j.properties"),". Then create a ConfigMap via ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl create configmap custom-connect-log4j --from-file=log4j.properties"),". This ConfigMap will then be used in our KafkaConnect cluster creation to filter out any logging output containing ",Object(n.b)("inlineCode",{parentName:"p"},"accesskey")," or ",Object(n.b)("inlineCode",{parentName:"p"},"secretkey")," permutations."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-properties"}),"# Do not change this generated file. Logging can be configured in the corresponding kubernetes/openshift resource.\nlog4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender\nlog4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout\nlog4j.appender.CONSOLE.layout.ConversionPattern=%d{ISO8601} %p %m (%c) [%t]%n\nconnect.root.logger.level=INFO\nlog4j.rootLogger=${connect.root.logger.level}, CONSOLE\nlog4j.logger.org.apache.zookeeper=ERROR\nlog4j.logger.org.I0Itec.zkclient=ERROR\nlog4j.logger.org.reflections=ERROR\n\n# Due to back-leveled version of log4j that is included in Kafka Connect,\n# we can use multiple StringMatchFilters to remove all the permutations\n# of the AWS accessKey and secretKey values that may get dumped to stdout\n# and thus into any connected logging system.\nlog4j.appender.CONSOLE.filter.a=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.a.StringToMatch=accesskey\nlog4j.appender.CONSOLE.filter.a.AcceptOnMatch=false\nlog4j.appender.CONSOLE.filter.b=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.b.StringToMatch=accessKey\nlog4j.appender.CONSOLE.filter.b.AcceptOnMatch=false\nlog4j.appender.CONSOLE.filter.c=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.c.StringToMatch=AccessKey\nlog4j.appender.CONSOLE.filter.c.AcceptOnMatch=false\nlog4j.appender.CONSOLE.filter.d=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.d.StringToMatch=ACCESSKEY\nlog4j.appender.CONSOLE.filter.d.AcceptOnMatch=false\n\nlog4j.appender.CONSOLE.filter.e=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.e.StringToMatch=secretkey\nlog4j.appender.CONSOLE.filter.e.AcceptOnMatch=false\nlog4j.appender.CONSOLE.filter.f=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.f.StringToMatch=secretKey\nlog4j.appender.CONSOLE.filter.f.AcceptOnMatch=false\nlog4j.appender.CONSOLE.filter.g=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.g.StringToMatch=SecretKey\nlog4j.appender.CONSOLE.filter.g.AcceptOnMatch=false\nlog4j.appender.CONSOLE.filter.h=org.apache.log4j.varia.StringMatchFilter\nlog4j.appender.CONSOLE.filter.h.StringToMatch=SECRETKEY\nlog4j.appender.CONSOLE.filter.h.AcceptOnMatch=false\n")),Object(n.b)("h4",null,"Deploy the baseline Kafka Connect Cluster"),Object(n.b)("p",null,"Review the YAML description for our ",Object(n.b)("inlineCode",{parentName:"p"},"KafkaConnectS2I")," custom resource below, named ",Object(n.b)("inlineCode",{parentName:"p"},"connect-cluster-101"),". Pay close attention to ",Object(n.b)("em",{parentName:"p"},"(using YAML notation)"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"spec.logging.name")," should point to the name of the ConfigMap created in the previous step to configure custom ",Object(n.b)("inlineCode",{parentName:"li"},"log4j")," logging filters ",Object(n.b)("em",{parentName:"li"},"(optional)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"spec.bootstrapServers")," should be updated with your local Event Streams endpoints"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"spec.tls.trustedCertificates[0].secretName")," should match the Kubernetes Secret containing the IBM Event Streams certificate"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"spec.authentication.passwordSecret.secretName")," should match the Kubernetes Secret containing the IBM Event Streams API key"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"spec.externalConfiguration.volumes[0].secret.secretName")," should match the Kubernetes Secret containing your AWS credentials"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"spec.config['group.id']")," should be a unique name for this Kafka Connect cluster across all Kafka Connect instances that will be communicating with the same set of Kafka brokers."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"spec.config['*.storage.topic']")," should be updated to provide unique topics for this Kafka Connect cluster inside your Kafka deployment. Distinct Kafka Connect clusters should not share metadata topics.")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'apiVersion: kafka.strimzi.io/v1alpha1\nkind: KafkaConnectS2I\nmetadata:\n  name: connect-cluster-101\n  annotations:\n    strimzi.io/use-connector-resources: "true"\nspec:\n  #logging:\n  #  type: external\n  #  name: custom-connect-log4j\n  replicas: 1\n  bootstrapServers: es-1-ibm-es-proxy-route-bootstrap-eventstreams.apps.cluster.local:443\n  tls:\n    trustedCertificates:\n      - certificate: es-cert.crt\n        secretName: eventstreams-truststore-cert\n  authentication:\n    passwordSecret:\n      secretName: eventstreams-apikey\n      password: password\n    username: token\n    type: plain\n  externalConfiguration:\n    volumes:\n      - name: aws-credentials\n        secret:\n          secretName: aws-credentials\n  config:\n    group.id: connect-cluster-101\n    config.providers: file\n    config.providers.file.class: org.apache.kafka.common.config.provider.FileConfigProvider\n    key.converter: org.apache.kafka.connect.json.JsonConverter\n    value.converter: org.apache.kafka.connect.json.JsonConverter\n    key.converter.schemas.enable: false\n    value.converter.schemas.enable: false\n    offset.storage.topic: connect-cluster-101-offsets\n    config.storage.topic: connect-cluster-101-configs\n    status.storage.topic: connect-cluster-101-status\n')),Object(n.b)("p",null,"Save the YAML above into a file named ",Object(n.b)("inlineCode",{parentName:"p"},"kafka-connect.yaml"),". If you created the ConfigMap in the previous step to filter out ",Object(n.b)("inlineCode",{parentName:"p"},"accesskey")," and ",Object(n.b)("inlineCode",{parentName:"p"},"secretkey")," values from the logs, uncomment the ",Object(n.b)("inlineCode",{parentName:"p"},"spec.logging")," lines to allow for the custom logging filters to be enabled during Kafka Connect cluster creation. Then this resource can be created via ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl apply -f kafka-connect.yaml"),". You can then tail the output of the ",Object(n.b)("inlineCode",{parentName:"p"},"connect-cluster-101")," pods for updates on the connector status."),Object(n.b)("h4",null,"Build the Camel Kafka Connector"),Object(n.b)("p",null,"The next step is to build the Camel Kafka Connector binaries so that they can be loaded into the just-deployed Kafka Connect cluster’s container images."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Clone the repository ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/osowski/camel-kafka-connector"}),"https://github.com/osowski/camel-kafka-connector")," to your local machine."),Object(n.b)("li",{parentName:"ol"},"Check out the ",Object(n.b)("inlineCode",{parentName:"li"},"camel-kafka-connector-0.1.0-branch")," via ",Object(n.b)("inlineCode",{parentName:"li"},"git checkout camel-kafka-connector-0.1.0-branch"),"."),Object(n.b)("li",{parentName:"ol"},"From the root directory of the repository, build the components using the ",Object(n.b)("inlineCode",{parentName:"li"},"mvn clean package")," command."),Object(n.b)("li",{parentName:"ol"},"Go get a coffee and take a walk… as this build will take around 30 minutes on a normal developer workstation.")),Object(n.b)("p",null,"Some items to note:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The repository used here (",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/osowski/camel-kafka-connector"}),"https://github.com/osowski/camel-kafka-connector"),") is a fork of the official repository (",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/apache/camel-kafka-connector"}),"https://github.com/apache/camel-kafka-connector"),") with a minor update applied to allow for dynamic endpoints to be specified via configuration, which is critical for our ",Object(n.b)("a",r({parentName:"li"},{href:"#kafka-to-s3-sink-connector"}),"Kafka to S3 Sink Connector")," scenario."),Object(n.b)("li",{parentName:"ul"},"This step (and the next step) will eventually be eliminated by providing an existing container image with the necessary Camel Kafka Connector binaries as part of a build system.")),Object(n.b)("h4",null,"Deploy the Camel Kafka Connector binaries"),Object(n.b)("p",null,"Now that the Camel Kafka Connector binaries have been built, we need to include them on the classpath inside of the container image which our Kafka Connect clusters are using."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"From the root directory of the repository, start a new OpenShift Build, using the generated build artifacts:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"oc start-build connect-cluster-101-connect --from-dir=./core/target/camel-kafka-connector-0.0.1-SNAPSHOT-package/share/java --follow\n"))),Object(n.b)("li",{parentName:"ol"},"Watch the Kubernetes pods as they are updated with the new build and rollout of the Kafka Connect Cluster using the updated container image ",Object(n.b)("em",{parentName:"li"},"(which now includes the Camel Kafka Connector binaries)"),":",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"kubectl get pods -w\n"))),Object(n.b)("li",{parentName:"ol"},"Once the ",Object(n.b)("inlineCode",{parentName:"li"},"connect-cluster-101-connect-2-[random-suffix]")," pod is in a ",Object(n.b)("inlineCode",{parentName:"li"},"Running")," state, you can proceed.")),Object(n.b)("h2",null,"Kafka to S3 Sink Connector"),Object(n.b)("p",null,"Now that you have a Kafka Connect cluster up and running, you will need to configure a connector to actually begin the transmission of data from one system to the other. This will be done by taking advantage of Strimzi and using the ",Object(n.b)("a",r({parentName:"p"},{href:"https://strimzi.io/docs/0.17.0/#kafkaconnector_resources"}),Object(n.b)("inlineCode",{parentName:"a"},"KafkaConnector")," custom resource")," the Strimzi Operator manages for us."),Object(n.b)("p",null,"Review the YAML description for our ",Object(n.b)("inlineCode",{parentName:"p"},"KafkaConnector")," custom resource below, named ",Object(n.b)("inlineCode",{parentName:"p"},"s3-sink-connector"),". Pay close attention to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"strimzi.io/cluster")," label must match the deployed Kafka Connect cluster you previously deployed ",Object(n.b)("em",{parentName:"li"},"(or else Strimzi will not connect the ",Object(n.b)("inlineCode",{parentName:"em"},"KafkaConnector")," to your ",Object(n.b)("inlineCode",{parentName:"em"},"KafkaConnect")," cluster)")),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"topics")," parameter ",Object(n.b)("em",{parentName:"li"},"(named ",Object(n.b)("inlineCode",{parentName:"em"},"my-source-topic")," here)")),Object(n.b)("li",{parentName:"ul"},"The S3 Bucket parameter of the ",Object(n.b)("inlineCode",{parentName:"li"},"camel.sink.url")," configuration option ",Object(n.b)("em",{parentName:"li"},"(named ",Object(n.b)("inlineCode",{parentName:"em"},"my-s3-bucket")," here)"))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: kafka.strimzi.io/v1alpha1\nkind: KafkaConnector\nmetadata:\n  name: s3-sink-connector\n  labels:\n    strimzi.io/cluster: connect-cluster-101\nspec:\n  class: org.apache.camel.kafkaconnector.CamelSinkConnector\n  tasksMax: 1\n  config:\n    key.converter: org.apache.kafka.connect.storage.StringConverter\n    value.converter: org.apache.kafka.connect.storage.StringConverter\n    topics: my-source-topic\n    camel.sink.url: aws-s3://my-s3-bucket?keyName=${date:now:yyyyMMdd-HHmmssSSS}-${exchangeId}\n    camel.sink.maxPollDuration: 10000\n    camel.component.aws-s3.configuration.autocloseBody: false\n    camel.component.aws-s3.accessKey: ${file:/opt/kafka/external-configuration/aws-credentials/aws-credentials.properties:aws_access_key_id}\n    camel.component.aws-s3.secretKey: ${file:/opt/kafka/external-configuration/aws-credentials/aws-credentials.properties:aws_secret_access_key}\n    camel.component.aws-s3.region: US_EAST_1\n")),Object(n.b)("p",null,"Once you have updated the YAML and saved it in a file named ",Object(n.b)("inlineCode",{parentName:"p"},"kafka-sink-connector.yaml"),", this resource can be created via ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl apply -f kafka-sink-connector.yaml"),". You can then tail the output of the ",Object(n.b)("inlineCode",{parentName:"p"},"connect-cluster-101")," pods for updates on the connector status."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"NOTE:")," If you require objects in S3 to reside in a sub-folder of the bucket root, you can place a folder name prefix in the ",Object(n.b)("inlineCode",{parentName:"p"},"keyName")," query parameter of the ",Object(n.b)("inlineCode",{parentName:"p"},"camel.sink.url")," configuration option above. For example, ",Object(n.b)("inlineCode",{parentName:"p"},"camel.sink.url: aws-s3://my-s3-bucket?keyName=myfoldername/${date:now:yyyyMMdd-HHmmssSSS}-${exchangeId}"),"."),Object(n.b)("h2",null,"S3 to Kafka Source Connector"),Object(n.b)("p",null,"Similar to the ",Object(n.b)("a",r({parentName:"p"},{href:"#kafka-to-s3-sink-connector"}),"Kafka to S3 Sink Connector")," scenario, this scenario will make use of the Strimzi ",Object(n.b)("a",r({parentName:"p"},{href:"https://strimzi.io/docs/0.17.0/#kafkaconnector_resources"}),Object(n.b)("inlineCode",{parentName:"a"},"KafkaConnector")," custom resource")," to configure the specific connector instance."),Object(n.b)("p",null,"Review the YAML description for our ",Object(n.b)("inlineCode",{parentName:"p"},"KafkaConnector")," custom resource below, named ",Object(n.b)("inlineCode",{parentName:"p"},"s3-source-connector"),". Pay close attention to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"strimzi.io/cluster")," label must match the deployed Kafka Connect cluster you previously deployed ",Object(n.b)("em",{parentName:"li"},"(or else Strimzi will not connect the ",Object(n.b)("inlineCode",{parentName:"em"},"KafkaConnector")," to your ",Object(n.b)("inlineCode",{parentName:"em"},"KafkaConnect")," cluster)")),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"topics")," and ",Object(n.b)("inlineCode",{parentName:"li"},"camel.source.kafka.topic")," parameters ",Object(n.b)("em",{parentName:"li"},"(named ",Object(n.b)("inlineCode",{parentName:"em"},"my-target-topic")," here)")),Object(n.b)("li",{parentName:"ul"},"The S3 Bucket parameter of the ",Object(n.b)("inlineCode",{parentName:"li"},"camel.sink.url")," configuration option ",Object(n.b)("em",{parentName:"li"},"(named ",Object(n.b)("inlineCode",{parentName:"em"},"my-s3-bucket")," here)"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Please note")," that it is an explicit intention that the topics used in the ",Object(n.b)("a",r({parentName:"p"},{href:"#kafka-to-s3-sink-connector"}),"Kafka to S3 Sink Connector")," configuration and the ",Object(n.b)("a",r({parentName:"p"},{href:"#s3-to-kafka-source-connector"}),"S3 to Kafka Source Connector")," configuration are different. If these configurations were to use the ",Object(n.b)("strong",{parentName:"p"},"same Kafka topic")," and the ",Object(n.b)("strong",{parentName:"p"},"same S3 Bucket"),", we would create an infinite processing loop of the same information being endlessly recycled through the system. In our example deployments here, we are deploying to different topics but the same S3 Bucket."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: kafka.strimzi.io/v1alpha1\nkind: KafkaConnector\nmetadata:\n  name: s3-source-connector\n  labels:\n    strimzi.io/cluster: connect-cluster-101\nspec:\n  class: org.apache.camel.kafkaconnector.CamelSourceConnector\n  tasksMax: 1\n  config:\n    key.converter: org.apache.kafka.connect.storage.StringConverter\n    value.converter: org.apache.camel.kafkaconnector.converters.S3ObjectConverter\n    topics: my-target-topic\n    camel.source.kafka.topic: my-target-topic\n    camel.source.url: aws-s3://my-s3-bucket?autocloseBody=false\n    camel.source.maxPollDuration: 10000\n    camel.component.aws-s3.accessKey: ${file:/opt/kafka/external-configuration/aws-credentials/aws-credentials-secret.properties:aws_access_key_id}\n    camel.component.aws-s3.secretKey: ${file:/opt/kafka/external-configuration/aws-credentials/aws-credentials-secret.properties:aws_secret_access_key}\n    camel.component.aws-s3.region: US_EAST_1\n")),Object(n.b)("p",null,"Once you have updated the YAML and saved it in a file named ",Object(n.b)("inlineCode",{parentName:"p"},"kafka-source-connector.yaml"),", this resource can be created via ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl apply -f kafka-source-connector.yaml"),". You can then tail the output of the ",Object(n.b)("inlineCode",{parentName:"p"},"connect-cluster-101")," pods for updates on the connector status."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"NOTE:")," If you require the connector to only read objects from a subdirecotry of the S3 bucket root, you can set the ",Object(n.b)("inlineCode",{parentName:"p"},"camel.component.aws-s3.configuration.prefix")," configuration option with the value of the subdirectory name. For example, ",Object(n.b)("inlineCode",{parentName:"p"},"camel.component.aws-s3.configuration.prefix: myfoldername")," ."),Object(n.b)("h2",null,"Next steps"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Enable use  of IAM Credentials in the Connector configuration ",Object(n.b)("em",{parentName:"li"},"(as the default Java code currently outputs ",Object(n.b)("inlineCode",{parentName:"em"},"aws_access_key_id")," and ",Object(n.b)("inlineCode",{parentName:"em"},"aws_secret_access_key")," to container runtime logs due to their existence as configuration properties)")),Object(n.b)("li",{parentName:"ul"},"Optionally configure individual connector instances to startup with offset value of -1 ",Object(n.b)("em",{parentName:"li"},"(to enable to run from beginning of available messages)")),Object(n.b)("li",{parentName:"ul"},"Implement a build system to produce container images with the Camel Kafka Connector binaries already present")),Object(n.b)("h2",null,"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://camel.apache.org/camel-kafka-connector/latest/try-it-out-on-openshift-with-strimzi.html"}),"Apache Camel Kafka Connector - Try it out on OpenShift with Strimzi")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://camel.apache.org/components/latest/languages/simple-language.html"}),"Apache Camel - Available pattern elements")," for use in the ",Object(n.b)("inlineCode",{parentName:"li"},"keyName")," parameter of the ",Object(n.b)("inlineCode",{parentName:"li"},"camel.sink.url")," property."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://camel.apache.org/components/latest/eips/toD-eip.html"}),"Apache Camel - Dynamic Endpoint reference")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://developers.redhat.com/blog/2020/02/14/using-secrets-in-apache-kafka-connect-configuration/"}),"Red Hat Developer Blog - Using secrets in Kafka Connect configuration")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"http://kafka.apache.org/documentation/#connect"}),"Apache Kafka - Connect Overview"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-scenarios-connect-s-3-index-mdx-dcec316a1c6a75051dd4.js.map