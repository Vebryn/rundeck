/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package rundeck.services

import org.slf4j.Logger
import org.slf4j.LoggerFactory

import java.util.concurrent.BlockingQueue

/**
 * Consumes tasks from a blocking queue, and runs them with a specified runner until interrupted
 * @param < E >
 */
class TaskRunner<E> implements Runnable{
    static final Logger log = LoggerFactory.getLogger(TaskRunner.class)
    BlockingQueue<E> queue
    Closure runner

    public TaskRunner(BlockingQueue<E> queue, Closure runner) {
        this.queue = queue
        this.runner=runner
    }

    @Override
    void run() {
        log.debug("starting queue consumer")
        while (true) {
            try {
                E task = queue.take()
                log.debug("running a task...")
                runner.call(task)
            } catch (InterruptedException e) {
                break;
            } catch (Throwable t) {
                log.error("An error occured while processing a task: ${t}", t)
            }
        }
    }
}
