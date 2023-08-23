pipeline{
    agent any

    parameters {
        choice(name:'Environment', choices:['qa', 'prod'], description: 'Example of choices environment')
        choice(name:'Script', choices:['all', 'login', 'shopping_cart'])
    }

    environment {
        IMAGE_NAME = 'testcafe-e2e'
    }

    stages{

        stage("Build docker image"){
            steps{
                echo "====++++Building test image++++===="
                script{
                    sh "docker build -t ${IMAGE_NAME} ."
                }                
            }
            post{
                success{
                    echo "========Image was buil successfully========"
                }
                failure{
                    echo "========Image was buil failed========"
                }
            }
        }

        stage("Run tests") {
            steps {
                echo "====++++Running tests++++===="
                script{
                    sh "docker run --name test ${IMAGE_NAME}"
                }
            }
        }
    }
    post{
        always{
            echo "========Build done========"
        }
    }
}