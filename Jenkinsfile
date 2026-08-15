pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/Roeurmdara/reactjs-devop-template'        
            }
        }

        stage('Build') {
            steps {
                sh "ls -lrt"
                sh """
                docker build -t jenkins-react:latest -f Dockerfile . 
                """
            }
        }

        stage('Deploy') {
            steps {
                sh """
                docker stop reactjs-app || true 
                docker rm reactjs-app || true 
                docker run -dp 3000:80 --name reactjs-app jenkins-react:latest 
                """
            }
        }
    }
}